import * as React from "react";
import Button from "@Components/materialUI/button";
import { useDispatch } from "react-redux";
import { SHOW_SPINNER } from "src/redux/spinner/spinnerType";
import { useRouter } from "next/router";
import { NextPage } from "next";

const HomePage: NextPage = () => {
    const dispatch = useDispatch();
    const router = useRouter();

    return (
        <>
            <Button
                variant="contained"
                color="primary"
                onClick={() => dispatch({ type: SHOW_SPINNER })}
            >
                Start loading
            </Button>
            <Button
                variant="contained"
                color="primary"
                onClick={() => router.push("/")}
            >
                Redirect
            </Button>
        </>
    );
};

export default HomePage;
