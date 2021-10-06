import CircularProgress from '@material-ui/core/CircularProgress';
import * as React from 'react';
import useStyles from './style';

export const Spinner = () => {
  const classes = useStyles();

  return (
    <div className={classes.spinner}>
      <CircularProgress color='primary' />
    </div>
  );
};
