import { makeStyles, createStyles } from "@mui/styles";
import { AppTheme } from "src/themes/types";

export default makeStyles((theme: AppTheme) =>
    createStyles({
        root: {
            fontSize: theme.variables.fontSizeSm,
        },
    })
);
