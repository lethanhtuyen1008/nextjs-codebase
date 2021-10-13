import React from "react";
import type { AppProps } from "next/app";
import theme from "src/themes";
import { CacheProvider, EmotionCache } from "@emotion/react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import colors from "src/themes/colors";
import styles from "src/themes/styles";
import variables from "src/themes/variables";
import { Provider } from "react-redux";
import { Spinner } from "src/components/materialUI/spinner";
import { store } from "src/redux/store";
import { ToastContainer } from "react-toastify";
import useCommonStyles from "src/themes/styles";
import "react-toastify/dist/ReactToastify.css";
import { Page } from "src/types/page";
import createEmotionCache from "src/createEmotionCache";
import { useRouter } from "next/router";
import "src/helpers/i18n";
const clientSideEmotionCache = createEmotionCache();

type Props = AppProps & {
  Component: Page;
  emotionCache?: EmotionCache;
};

export default function App(props: Props) {
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
    <>
      <Provider store={store}>
        <Component {...pageProps} />
        <Spinner show={loading} />
      </Provider>
      <ToastContainer className={classes.toastify} />
      <CssBaseline />
    </>
  );
}
