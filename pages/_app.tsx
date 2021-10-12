import React from "react";
import type { AppProps } from "next/app";
import theme from "src/themes/index";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { ThemeProvider } from "@mui/styles";
import CssBaseline from "@mui/material/CssBaseline";
import colors from "src/themes/colors";
import styles from "src/themes/styles";
import variables from "src/themes/variables";
import Layout from "@Components/layout";
import { Provider } from "react-redux";
import { Spinner } from "src/components/materialUI/spinner";
import { store } from "src/redux/store";

export const cache = createCache({ key: "css", prepend: true });

export default function App(props: AppProps) {
    const { Component, pageProps } = props;

    React.useEffect(() => {
        const jssStyles = document.querySelector("#jss-server-side");
        if (jssStyles) {
            jssStyles.parentElement!.removeChild(jssStyles);
        }
    }, []);

    return (
        <CacheProvider value={cache}>
            <ThemeProvider theme={{ ...theme, colors, variables, styles }}>
                <Layout>
                    <Provider store={store}>
                        <Component {...pageProps} />
                        <Spinner />
                    </Provider>
                </Layout>
                <CssBaseline />
            </ThemeProvider>
        </CacheProvider>
    );
}
