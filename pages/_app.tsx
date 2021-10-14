import React from "react";
import type { AppProps } from "next/app";
import theme from "themes";
import { CacheProvider, EmotionCache } from "@emotion/react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import colors from "themes/colors";
import styles from "themes/styles";
import variables from "themes/variables";
import { Provider } from "react-redux";
import { Spinner } from "@Components/materialUI/spinner";
import { store } from "libs/redux/store";
import { ToastContainer } from "react-toastify";
import useCommonStyles from "themes/styles";
import "react-toastify/dist/ReactToastify.css";
import { Page } from "types/page";
import createEmotionCache from "libs/createEmotionCache";
import { useRouter } from "next/router";
import { I18nextProvider } from "react-i18next";
import i18n from "libs/helpers/i18n";
const clientSideEmotionCache = createEmotionCache();

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

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);
  }, [router]);

  return getLayout(
    <I18nextProvider i18n={i18n}>
      <Provider store={store}>
        <Component {...pageProps} />
        <Spinner show={loading} />
      </Provider>
      <ToastContainer className={classes.toastify} />
      <CssBaseline />
    </I18nextProvider>
  );
}

function App(props: Props) {
  const { emotionCache = clientSideEmotionCache } = props;

  React.useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement!.removeChild(jssStyles);
    }
  }, []);

  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={{ ...theme, colors, variables, styles }}>
        <MyApp {...props} />
      </ThemeProvider>
    </CacheProvider>
  );
}

export default App;
