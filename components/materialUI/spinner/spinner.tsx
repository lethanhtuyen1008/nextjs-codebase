import { Backdrop, CircularProgress } from "@mui/material";
import * as React from "react";
import useStyles from "./style";
import { Props } from "./types";

export const Spinner = (props: Props) => {
  const classes = useStyles();

  if (!props.show) {
    return null;
  }

  return (
    <Backdrop className={classes.backdrop} open={true}>
      <div className={classes.content}>
        <CircularProgress color="inherit" />
      </div>
    </Backdrop>
  );
};
