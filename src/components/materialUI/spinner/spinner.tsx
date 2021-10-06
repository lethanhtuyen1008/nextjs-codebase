import { Backdrop, CircularProgress } from '@material-ui/core';
import * as React from 'react';
import useStyles from './style';
import { Props } from './types';
import { RootState } from 'src/redux/types';
import { useSelector } from 'react-redux';

export const Spinner = (props: Props) => {
  const spinnerReducer = useSelector((state: RootState) => state.spinnerReducer);
  const classes = useStyles();

  if (!props.show && !spinnerReducer.show && spinnerReducer.showCount === 0) {
    return null;
  }

  return (
    <Backdrop className={classes.backdrop} open={true}>
      <div className={classes.content}>
        <CircularProgress color='inherit' />
        {spinnerReducer.message && <div>{spinnerReducer.message}</div>}
      </div>
    </Backdrop>
  );
};
