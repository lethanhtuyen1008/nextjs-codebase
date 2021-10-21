import { makeStyles, createStyles } from '@mui/styles';
import { AppTheme } from './types';

export default makeStyles((theme: AppTheme) =>
  createStyles({
    title: {
      backgroundColor: theme.palette.common.black,
    },
    toastify: {
      fontFamily: 'inherit',
    },
    pageHeading: {
      fontSize: theme.variables.pageHeadingFontSize,
    },
    headerPublic: {
      [theme.breakpoints.down('xs')]: {
        paddingLeft: 15,
        paddingRight: 15,
        '& .MuiTypography-h2': {
          fontSize: 18,
        },
        '& .MuiGrid-item:last-child': {
          display: 'none',
        },
      },
    },
    minWidthButton: {
      minWidth: 200,
    },
    paperRounded: {
      borderRadius: theme.variables.borderRadius,
    },
    dialogPaper: {
      width: '100%',
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(2),
    },
    iconButton: {
      position: 'absolute',
      right: 0,
      top: 0,
      padding: theme.spacing(2),
      zIndex: theme.zIndex.speedDial,
      '& svg': {
        fontSize: theme.variables.fontSizeHeading2,
      },
    },
    boxBlur: {
      opacity: 0.5,
      pointerEvents: 'none',
      cursor: 'default',
    },
    linkPrimary: {
      color: theme.palette.secondary.main,
      transition: theme.transitions.create(['color']),
      textDecoration: 'none',
      '&:hover': {},
    },
    linkDefault: {
      transition: theme.transitions.create(['color']),
      textDecoration: 'none',
      '&:hover': {
        color: theme.palette.secondary.main,
      },
    },
    titlePage: {
      textTransform: 'uppercase',
      fontWeight: 600,
      fontSize: 16,
    },
    textRight: {
      textAlign: 'right',
    },
    textLeft: {
      textAlign: 'left',
      marginLeft: 16,
    },
  }),
);
