import { createTheme } from "@mui/material/styles";
import Color from "color";
import colors from "./colors";
import variables from "./variables";

const theme = createTheme({
    typography: {
        htmlFontSize: variables.htmlFontSize,
        fontFamily: variables.fontFamily,
        fontSize: variables.fontSize,
        fontWeightLight: variables.fontWeightLight,
        fontWeightRegular: variables.fontWeightRegular,
        fontWeightMedium: variables.fontWeightMedium,
        fontWeightBold: variables.fontWeightBold,
        body1: {
            lineHeight: variables.lineHeight,
            fontSize: variables.fontSize,
            fontWeight: "inherit",
        },
        h1: {
            fontSize: variables.fontSizeHeading1,
            fontWeight: variables.fontWeightMedium,
        },
        h2: {
            fontSize: variables.fontSizeHeading2,
            fontWeight: variables.fontWeightMedium,
        },
        h3: {
            fontSize: variables.fontSizeHeading3,
            fontWeight: variables.fontWeightBold,
        },
        h5: {
            fontSize: variables.htmlFontSize,
            fontWeight: variables.fontWeightBold,
        },
        h6: {
            fontSize: variables.htmlFontSize,
            fontWeight: variables.fontWeightBold,
        },
        button: {
            fontWeight: variables.fontWeightMedium,
        },
        caption: {
            fontFamily: variables.fontFamily,
        },
    },
    palette: {
        common: {
            white: colors.white,
            black: colors.black,
        },
        primary: {
            main: colors.primary,
            light: colors.primaryLight,
            dark: colors.primaryDark,
        },
        secondary: {
            main: colors.secondary,
            light: colors.secondaryLight,
            dark: colors.secondaryDark,
        },
        error: {
            main: colors.error,
            light: colors.errorLight,
            dark: colors.errorDark,
        },
        info: {
            main: colors.info,
            light: colors.infoLight,
            dark: Color(colors.info).darken(0.2).toString(),
        },
        grey: {
            300: colors.grey300,
            400: colors.grey400,
            500: colors.grey500,
        },
        text: {
            disabled: colors.grey600,
        },
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 680,
            md: 960,
            lg: 1280,
            xl: 1920,
        },
    },
    shape: {
        borderRadius: 5,
    },
    mixins: {
        toolbar: {
            minHeight: 48,
        },
    },
});

export default {
    ...theme,
    overrides: {
        MuiAppBar: {
            root: {
                backgroundColor: theme.palette.common.white,
            },
        },
        MuiCssBaseline: {
            "@global": {
                margin: 0,
                html: {
                    WebkitFontSmoothing: "auto",
                },
                body: {
                    color: colors.blueGrey900,
                    backgroundColor: theme.palette.common.white,
                    fontWeight: 500,
                },
            },
        },
        MuiTypography: {
            colorTextSecondary: {
                color: colors.blueGrey900,
            },
        },
        MuiPaper: {
            root: {
                color: colors.blueGrey900,
            },
        },
        MuiButton: {
            root: {
                padding: "16px 45px",
                borderRadius: variables.borderRadius,
                lineHeight: 1.2,
                color: colors.blueGrey900,
            },
            text: {
                textTransform: "none",
            },
            label: {},
            outlined: {
                padding: "16px 45px",
            },
            contained: {
                boxShadow: "none",
                fontWeight: variables.fontWeightBold,
                fontSize: variables.fontSizeSm,
                textTransform: "uppercase",
                color: colors.blueGrey900,
                backgroundColor: theme.palette.info.light,
                border: `2px solid ${colors.transparent}`,
                "&:hover": {
                    backgroundColor: colors.infoLightHover,
                    boxShadow: "none",
                },
                "&:active": {
                    boxShadow: "none",
                },
            },
            containedPrimary: {
                color: theme.palette.common.white,
            },
            containedSecondary: {
                color: theme.palette.common.white,
            },
        },
        MuiTabs: {
            root: {
                marginLeft: 0,
            },
            indicator: {
                height: 3,
                borderTopLeftRadius: 3,
                borderTopRightRadius: 3,
                backgroundColor: theme.palette.common.white,
            },
        },
        MuiTab: {
            root: {
                textTransform: "none",
                margin: "0 16px",
                minWidth: 0,
                padding: 0,
                [theme.breakpoints.up("md")]: {
                    padding: 0,
                    minWidth: 0,
                },
            },
        },
        MuiIconButton: {
            root: {
                color: colors.grey300,
                padding: theme.spacing(1),
            },
            edgeEnd: {
                marginRight: -5,
            },
        },
        MuiTooltip: {
            tooltip: {
                borderRadius: 4,
            },
        },
        MuiDivider: {
            root: {
                backgroundColor: "#404854",
            },
        },
        MuiListItemText: {
            primary: {
                fontWeight: theme.typography.fontWeightMedium,
            },
        },
        MuiListItemIcon: {
            root: {
                color: "inherit",
                marginRight: 0,
                "& svg": {
                    fontSize: 24,
                },
            },
        },
        MuiAvatar: {
            root: {
                width: 32,
                height: 32,
            },
        },
        MuiFormControl: {
            marginNormal: {
                marginTop: 22,
            },
        },
        PrivateNotchedOutline: {
            root: {
                paddingLeft: 25,
            },
            legendLabelled: {
                "& > span": {
                    paddingLeft: 7,
                    paddingRight: 7,
                },
            },
        },
        MuiFormLabel: {
            root: {
                fontSize: variables.fontSize,
                fontWeight: theme.typography.fontWeightMedium,
                color: colors.grey400,
                "&$focused": {
                    color: theme.palette.secondary.main,
                },
                "&$error": {
                    color: theme.palette.error.dark,
                },
            },
        },
        MuiInputLabel: {
            root: {
                textTransform: "none",
            },
            outlined: {
                transform: "translate(30px, 18px) scale(1)",
                "&$shrink": {
                    transform: "translate(30px, -6px) scale(0.75)",
                },
            },
        },
        MuiInputBase: {
            root: {
                "&$focused svg": {
                    color: theme.palette.secondary.main,
                },
            },
            input: {
                "&:-webkit-autofill, &:-webkit-autofill:hover, &:-webkit-autofill:focus, &:-webkit-autofill:active":
                    {
                        transitionDelay: "9999s",
                    },
            },
        },
        MuiOutlinedInput: {
            root: {
                borderRadius: variables.borderRadius,

                "&:hover $notchedOutline": {
                    borderColor: theme.palette.grey[300],
                },
                "&$focused $notchedOutline": {
                    borderWidth: 1,
                    borderColor: theme.palette.secondary.main,
                },
                "&$error $notchedOutline": {
                    borderColor: theme.palette.error.light,
                },
                "& ~ .MuiFormHelperText-contained": {
                    marginLeft: 30,
                    marginRight: 30,
                },
            },
            input: {
                padding: "17px 20px 17px 30px",
                color: colors.blueGrey900,
            },
            notchedOutline: {
                borderColor: theme.palette.grey[300],
            },
            multiline: {
                paddingLeft: 30,
                paddingRight: 20,
            },
        },
        MuiSelect: {
            select: {
                "&:focus": {
                    backgroundColor: colors.transparent,
                },
            },
        },
        MuiMenuItem: {
            root: {
                color: theme.palette.grey[400],
                "&$selected, &$selected:hover": {
                    color: colors.blueGrey900,
                },
                "&$selected:before": {
                    content: '" "',
                    position: "absolute",
                    borderTop: `2px solid ${theme.palette.secondary.main}`,
                    borderLeft: `2px solid ${theme.palette.secondary.main}`,
                    right: 20,
                    top: "50%",
                    height: 10,
                    width: 7,
                    transform: "rotate(-137deg)",
                    marginTop: -7,
                },
            },
        },
        MuiListItem: {
            button: {
                "&:hover": {
                    color: colors.blueGrey900,
                },
            },
        },
        MuiDialogTitle: {
            root: {
                "& > h2": {
                    color: theme.palette.secondary.main,
                },
            },
        },
    },
};
