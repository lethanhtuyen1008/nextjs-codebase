import Layout from "@Components/layout";
import { CacheProvider, EmotionCache } from "@emotion/react";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { AppProps } from "next/app";
import * as React from "react";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import { Spinner } from "src/components/materialUI/spinner";
import createEmotionCache from "src/createEmotionCache";
import { store } from "src/redux/store";
import colors from "src/themes/colors";
import theme from "src/themes/index";
import styles from "src/themes/styles";
import variables from "src/themes/variables";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";

const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

export default function App(props: MyAppProps) {
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

export function MyApp(props: AppProps) {
  const router = useRouter();
  const { Component, pageProps } = props;
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    const handleStart = (url: string) => {
      url !== router.pathname ? setLoading(true) : setLoading(false);
    };
    const handleComplete = (url: string) => setLoading(false);

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);
  }, [router]);

  return (
    <>
      <Layout>
        <Provider store={store}>
          <Component {...pageProps} />
          <Spinner show={loading} />
        </Provider>
        <ToastContainer />
      </Layout>
      <CssBaseline />
    </>
  );
}
