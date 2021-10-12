import * as React from "react";
import Button from "@Components/materialUI/button";
import { useDispatch } from "react-redux";
import { SHOW_SPINNER } from "src/redux/spinner/spinnerType";
import { useRouter } from "next/router";
import { NextPage } from "next";
import TextField from "@mui/material/TextField";

const HomePage: NextPage = () => {
    const dispatch = useDispatch();
    const router = useRouter();

    return (
        <div>
            <Button
                variant="contained"
                color="primary"
                onClick={() => dispatch({ type: SHOW_SPINNER })}
            >
                Start loading 1
            </Button>
            <Button
                variant="contained"
                color="primary"
                onClick={() => router.push("/")}
            >
                Redirect
            </Button>
            <Button
                variant="contained"
                color="primary"
                onClick={() => router.push("/sign-in")}
            >
                Sign in
            </Button>
            <TextField
                id="outlined-basic"
                label="Outlined"
                variant="outlined"
            />
            <TextField id="filled-basic" label="Filled" variant="filled" />
            <TextField
                id="standard-basic"
                label="Standard"
                variant="standard"
            />
        </div>
    );
};

export default HomePage;
