import FormControl from "@mui/material/FormControl";
import clsx from "clsx";
import * as React from "react";
import useStyles from "./style";

function FormControlIcon(props: any) {
    const { classes: customClasses, ...others } = props;
    const classes = useStyles();
    return (
        <FormControl
            {...others}
            className={clsx(classes.formControlIco, customClasses)}
            fullWidth
        >
            {props.children}
        </FormControl>
    );
}

export default FormControlIcon;
