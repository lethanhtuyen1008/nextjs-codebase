import { makeStyles, createStyles } from "@mui/styles";
import { AppTheme } from "src/themes/types";

export default makeStyles((theme: AppTheme) =>
    createStyles({
        root: {
            color: theme.palette.grey[400],
        },
        disabled: {},
        shrink: {
            fontSize: theme.typography.fontSize,
            fontFamily: theme.typography.fontFamily,
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
            overflow: "hidden",
        },
    })
);
