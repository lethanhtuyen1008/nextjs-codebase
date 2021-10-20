import { makeStyles, createStyles } from '@mui/styles';
import { AppTheme } from 'themes/types';
import { alpha } from '@mui/material';

export default makeStyles((theme: AppTheme) =>
  createStyles({
    root: {
      padding: '16px 45px',
      borderRadius: theme.variables.borderRadius,
      lineHeight: 1.2,
    },
    label: {},
    contained: {
      boxShadow: 'none',
      borderWidth: 2,
      borderStyle: theme.variables.borderStyle,
      borderColor: 'transparent',
      '&:active': {
        boxShadow: 'none',
      },
      '&:hover': {
        boxShadow: 'none',
      },
      '&:disabled': {
        backgroundColor: theme.palette.grey[500],
        color: theme.palette.text.disabled,
      },
    },
    containedPrimary: {
      color: 'white',
      '&:active': {},
      '&:focus': {
        borderColor: 'white',
      },
    },
    containedSecondary: {
      color: 'white',
      '&:active': {},
      '&:focus': {
        borderColor: 'white',
      },
    },
    outlined: {
      borderWidth: 2,
      '&:hover': {
        borderWidth: 2,
      },
      '&:disabled': {
        borderWidth: 2,
        borderColor: theme.palette.grey[500],
        color: theme.palette.grey[500],
      },
    },
    outlinedPrimary: {
      '&:active': {},
      '&:hover': {
        color: 'white',
      },
      '&:focus': {
        background: 'transparent',
      },
    },
    outlinedSecondary: {
      '&:active': {},
      '&:hover': {
        color: 'white',
      },
      '&:focus': {
        background: 'transparent',
      },
    },
  }),
);
