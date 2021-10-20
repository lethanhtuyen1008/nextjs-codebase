import { AppTheme } from 'themes/types';
import { makeStyles, createStyles } from '@mui/styles';

export default makeStyles((theme: AppTheme) =>
  createStyles({
    root: {
      fontSize: theme.typography.fontSize,
      backgroundColor: theme.palette.common.white,
      fontWeight: theme.typography.fontWeightMedium,
      transition: theme.transitions.create(['border-color', 'box-shadow']),
      [theme.breakpoints.up('md')]: {
        fontSize: theme.variables.fontSize,
      },
      [theme.breakpoints.down('sm')]: {
        fontSize: theme.variables.fontSizeSm,
      },
      '&$disabled': {
        backgroundColor: 'red',
        boxShadow: 'none',
        borderWidth: 0,
        borderRadius: 0,
      },
      '&$disabled input': {
        paddingLeft: 0,
        paddingBottom: 0,
      },

      '& .MuiFilledInput-input': {
        paddingLeft: 25,
        paddingRight: 25,
      },
      '&.MuiOutlinedInput-root': {
        border: '0 none',
      },
      '&.MuiOutlinedInput-root:hover': {
        border: 'solid 2px',
      },
    },
    hideLabel: {
      '& .MuiFilledInput-input': {
        paddingTop: 15,
        paddingBottom: 15,
      },
    },
    showLabel: {
      '& .MuiInputLabel-filled': {
        transform: 'translate(25px, 20px) scale(1)',

        '&.MuiInputLabel-shrink': {
          transform: 'translate(25px, 10px) scale(0.75)',
        },
      },
    },
    focused: {},
    disabled: {},
    error: {},
    '.MuiOutlinedInput-notchedOutline': {
      borderColor: theme.palette.grey[300],
    },
  }),
);
