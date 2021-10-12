import { makeStyles } from "@mui/styles";
import { AppTheme } from "src/themes/types";

const spacingXHelpText = 45;

export default makeStyles((theme: AppTheme) => ({
    boxLink: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: theme.palette.common.white,
        paddingBottom: 30,
        zIndex: theme.zIndex.mobileStepper,
        [theme.breakpoints.down("sm")]: {
            position: "fixed",
        },
    },
    form: {
        width: "100%",
        maxWidth: 400,
        marginLeft: "auto",
        marginRight: "auto",
        [theme.breakpoints.down("sm")]: {
            padding: theme.spacing(0, 4),
        },
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
        minWidth: 200,
    },
    isDesktop: {
        [theme.breakpoints.up("md")]: {
            display: "none",
        },
    },
    formControlEmail: {
        "& > img": {
            top: 41,
        },

        "& .MuiOutlinedInput-root ~ .MuiFormHelperText-contained": {
            marginLeft: spacingXHelpText,
            marginRight: spacingXHelpText,
        },
    },
    formControlPass: {
        "& > img": {
            top: 38,
        },

        "& .MuiOutlinedInput-root ~ .MuiFormHelperText-contained": {
            marginLeft: spacingXHelpText,
            marginRight: spacingXHelpText,
        },
    },
    iconEmail: {
        marginTop: -2,
    },
}));
