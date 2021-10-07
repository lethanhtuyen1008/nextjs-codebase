import type { AppProps } from "next/app";
import { ThemeProvider } from "@material-ui/core";
import theme from "src/themes";
import colors from "src/themes/colors";
import styles from "src/themes/styles";
import variables from "src/themes/variables";
import { Provider } from "react-redux";
import { Spinner } from "src/components/materialUI/spinner";
import { store } from "src/redux/store";
import Layout from "@Components/layout";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider theme={{ ...theme, colors, variables, styles }}>
            <Layout>
                <Provider store={store}>
                    <Component {...pageProps} />
                    <Spinner />
                </Provider>
            </Layout>
        </ThemeProvider>
    );
}
export default MyApp;
