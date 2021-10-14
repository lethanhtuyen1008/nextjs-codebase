import { Button as MaterialButton, ButtonProps } from "@mui/material";
import * as React from "react";
import useStyles from "./style";

const Button = (props: ButtonProps) => {
    const classes = useStyles();

    return (
        <MaterialButton
            classes={{
                root: classes.root,
                contained: classes.contained,
                containedPrimary: classes.containedPrimary,
                containedSecondary: classes.containedSecondary,
                outlined: classes.outlined,
                outlinedPrimary: classes.outlinedPrimary,
                outlinedSecondary: classes.outlinedSecondary,
            }}
            {...props}
        />
    );
};

export default Button;
