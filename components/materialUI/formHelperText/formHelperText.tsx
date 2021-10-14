import MaterialFormHelperText, {
  FormHelperTextProps,
} from "@mui/material/FormHelperText";
import * as React from "react";
import useStyles from "./style";

const FormHelperText = (props: FormHelperTextProps) => {
  const classes = useStyles();

  return <MaterialFormHelperText classes={classes} {...props} />;
};

export default FormHelperText;
