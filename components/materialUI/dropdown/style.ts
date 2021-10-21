import { createStyles, makeStyles } from '@mui/styles';
import { AppTheme } from 'themes/types';

export default makeStyles((theme: AppTheme) =>
  createStyles({
    selectPreview: {
      '& .MuiOutlinedInput-notchedOutline': {
        borderColor: 'transparent',
      },
      '& .MuiOutlinedInput-notchedOutline:after': {
        borderColor: 'transparent',
      },
      '& .MuiOutlinedInput-notchedOutline:before': {
        borderColor: 'transparent',
      },
      '& .Mul-focuseds': {
        borderColor: 'transparent',
      },
    },
    labelPreview: {
      textTransform: 'uppercase',
    },
  }),
);
