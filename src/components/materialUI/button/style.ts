import { createStyles, makeStyles, fade } from '@material-ui/core/styles';
import { AppTheme } from 'src/themes/types';

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
      borderColor: theme.colors.transparent,
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
      color: theme.colors.white,
      '&:active': {
        backgroundColor: theme.colors.primaryLight,
      },
      '&:focus': {
        borderColor: theme.colors.white,
        boxShadow: `0 4px 8px 0 ${fade(theme.colors.blueGrey900, 0.4)}`,
      },
    },
    containedSecondary: {
      color: theme.colors.white,
      '&:active': {
        backgroundColor: theme.colors.secondaryLight,
      },
      '&:focus': {
        borderColor: theme.colors.white,
        boxShadow: `0 4px 8px 0 ${fade(theme.colors.blueGrey900, 0.4)}`,
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
      borderColor: theme.colors.primary,
      '&:active': {
        backgroundColor: theme.colors.primaryLight,
      },
      '&:hover': {
        backgroundColor: theme.colors.primary,
        color: theme.colors.white,
      },
      '&:focus': {
        borderColor: theme.colors.primary,
        color: theme.colors.primary,
        background: theme.colors.transparent,
        boxShadow: `0 4px 8px 0 ${fade(theme.colors.blueGrey900, 0.4)}`,
      },
    },
    outlinedSecondary: {
      borderColor: theme.colors.secondary,
      '&:active': {
        backgroundColor: theme.colors.secondaryLight,
      },
      '&:hover': {
        backgroundColor: theme.colors.secondary,
        color: theme.colors.white,
      },
      '&:focus': {
        borderColor: theme.colors.secondary,
        color: theme.colors.secondary,
        background: theme.colors.transparent,
        boxShadow: `0 4px 8px 0 ${fade(theme.colors.blueGrey900, 0.4)}`,
      },
    },
  }),
);
