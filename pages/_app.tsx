import React, { Component } from "react";
import type { AppProps } from "next/app";
import theme from "src/themes/index";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { ThemeProvider } from "@mui/styles";
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
export const cache = createCache({ key: "css", prepend: true });

type Props = AppProps & {
  Component: Page;
};

export default function App(props: Props) {
  React.useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement!.removeChild(jssStyles);
    }
  }, []);

  return (
    <CacheProvider value={cache}>
      <ThemeProvider theme={{ ...theme, colors, variables, styles }}>
        <MyApp {...props} />
        <CssBaseline />
      </ThemeProvider>
    </CacheProvider>
  );
}

export function MyApp(props: Props) {
  const { Component, pageProps } = props;
  const classes = useCommonStyles();
  const getLayout = Component.getLayout || ((page: any) => page);

  return getLayout(
    <div>
      <Provider store={store}>
        <Component {...pageProps} />
        <Spinner />
      </Provider>
      <ToastContainer className={classes.toastify} />
    </div>
  );
}
