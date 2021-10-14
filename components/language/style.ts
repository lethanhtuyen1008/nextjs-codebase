import { createStyles, makeStyles } from "@mui/styles";
import { AppTheme } from "themes/types";

export default makeStyles((theme: AppTheme) =>
  createStyles({
    select: {
      width: "100%",
      height: 59,
      "& .MuiInputBase-formControl": {
        borderRadius: 10,
        background: theme.colors.white,
        border: `1px solid ${theme.colors.gray60}`,
        "&::before": {
          display: "none",
        },
        "&::after": {
          display: "none",
        },
      },
    },
  })
);
