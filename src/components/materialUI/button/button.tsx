import { Button as MaterialButton, ButtonProps } from '@material-ui/core';
import * as React from 'react';
import useStyles from './style';

const Button = (props: ButtonProps) => {
  const classes = useStyles();

  return (
    <MaterialButton
      classes={{
        root: classes.root,
        contained: classes.contained,
        containedPrimary: classes.containedPrimary,
        containedSecondary: classes.containedSecondary,
        outlined: classes.outlined,
        outlinedPrimary: classes.outlinedPrimary,
        outlinedSecondary: classes.outlinedSecondary,
        label: classes.label,
      }}
      {...props}
    />
  );
};

export default Button;
