import { Spinner } from 'components/materialUI/spinner';
import { AuthContext } from '@devblock/react-auth/dist/context';
import { EmotionCache } from '@emotion/react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import i18n from 'libs/helpers/i18n';
import { authProvider } from 'libs/providers/authProvider';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import React from 'react';
import { I18nextProvider } from 'react-i18next';
import theme from 'themes';
import { default as styles, default as useCommonStyles } from 'themes/styles';
import variables from 'themes/variables';
import { Page } from 'types/page';

type Props = AppProps & {
  Component: Page;
  emotionCache?: EmotionCache;
};

export function MyApp(props: Props) {
  const { Component, pageProps } = props;
  const classes = useCommonStyles();
  const router = useRouter();
  const getLayout = Component.getLayout || ((page: any) => page);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    const handleStart = (url: string) => {
      url !== router.pathname ? setLoading(true) : setLoading(false);
    };
    const handleComplete = () => setLoading(false);

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);
  }, [router]);

  return getLayout(
    <I18nextProvider i18n={i18n}>
      <Component {...pageProps} />
      <Spinner show={loading} />
      <CssBaseline />
    </I18nextProvider>,
  );
}

function App(props: Props) {
  React.useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement!.removeChild(jssStyles);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ provider: authProvider }}>
      <ThemeProvider theme={{ ...theme, variables, styles }}>
        <MyApp {...props} />
      </ThemeProvider>
    </AuthContext.Provider>
  );
}

export default App;
