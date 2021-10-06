import React from "react";
import { ButtonProps as MuiButtonProps } from "@mui/material/Button";
import MuiButton from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import useStyles from "./style";
interface Props extends MuiButtonProps {
    loading?: boolean;
    loadingText?: string;
}

const Button = (props: Props) => {
    const { loading = false, children, loadingText = null, ...other } = props;
    const classes = useStyles();

    if (loading) {
        return (
            <MuiButton disabled {...other}>
                <CircularProgress size={18} className={classes.alert} />
                {loadingText || children}
            </MuiButton>
        );
    }

    return <MuiButton {...other}>{children}</MuiButton>;
};

export default Button;
