import { createStyles, makeStyles } from "@mui/styles";
import { AppTheme } from "themes/types";

export default makeStyles((theme: AppTheme) =>
  createStyles({
    selectPreview: {
      "& .MuiOutlinedInput-notchedOutline": {
        borderColor: theme.colors.transparent,
      },
      "& .MuiOutlinedInput-notchedOutline:after": {
        borderColor: theme.colors.transparent,
      },
      "& .MuiOutlinedInput-notchedOutline:before": {
        borderColor: theme.colors.transparent,
      },
      "& .Mul-focuseds": {
        borderColor: theme.colors.transparent,
      },
    },
    labelPreview: {
      color: theme.colors.secondary,
      textTransform: "uppercase",
    },
  })
);
