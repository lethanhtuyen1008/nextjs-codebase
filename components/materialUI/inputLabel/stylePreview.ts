import { withStyles, createStyles } from "@mui/styles";
import { AppTheme } from "themes/types";

export default withStyles((theme: AppTheme) =>
  createStyles({
    root: {
      "& label": {
        color: theme.colors.secondary,
        textTransform: "uppercase",
      },
      "& label.Mui-focused": {
        color: theme.colors.secondary,
      },

      "& .MuiInput-underline:after": {
        borderBottomColor: theme.colors.transparent,
      },
      "& .MuiOutlinedInput-notchedOutline": {
        borderColor: theme.colors.transparent,
      },
    },
  })
);
