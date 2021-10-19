import { Spinner } from "@Components/materialUI/spinner";
import { CacheProvider, EmotionCache } from "@emotion/react";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import createEmotionCache from "libs/createEmotionCache";
import i18n from "libs/helpers/i18n";
import { store } from "libs/redux/store";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import React from "react";
import { I18nextProvider } from "react-i18next";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import theme from "themes";
import colors from "themes/colors";
import { default as styles, default as useCommonStyles } from "themes/styles";
import variables from "themes/variables";
import { Page } from "types/page";
const clientSideEmotionCache = createEmotionCache();
import { AuthContext } from "@devblock/react-auth/dist/context";
import { authProvider } from "libs/providers/authProvider";

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
      {typeof window === "object" && (
        <AuthContext.Provider value={{ provider: authProvider }}>
          <ThemeProvider theme={{ ...theme, colors, variables, styles }}>
            <MyApp {...props} />
          </ThemeProvider>
        </AuthContext.Provider>
      )}
    </CacheProvider>
  );
}

export default App;
