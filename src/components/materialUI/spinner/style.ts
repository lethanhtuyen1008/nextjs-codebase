import { makeStyles, createStyles } from "@mui/styles";
import { AppTheme } from "src/themes/types";

export default makeStyles((theme: AppTheme) =>
    createStyles({
        backdrop: {
            zIndex: theme.zIndex.modal + 1,
            color: theme.colors.white,
        },
        content: {
            textAlign: "center",
        },
    })
);
