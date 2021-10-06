import * as React from "react";
import Layout from "@Components/layoutComponent";
import Button from "@Components/materialUI/button";
import { useDispatch } from "react-redux";
import { SHOW_SPINNER } from "src/redux/spinner/spinnerType";

const HomePage = () => {
    const dispatch = useDispatch();

    return (
        <Layout>
            <Button
                variant="contained"
                color="primary"
                onClick={() => dispatch({ type: SHOW_SPINNER })}
            >
                Start loading
            </Button>
        </Layout>
    );
};

export default HomePage;
