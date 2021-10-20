import { withStyles, createStyles } from '@mui/styles';
import { AppTheme } from 'themes/types';

export default withStyles((theme: AppTheme) =>
  createStyles({
    root: {
      '& label': {
        textTransform: 'uppercase',
      },
      '& label.Mui-focused': {},

      '& .MuiInput-underline:after': {
        borderBottomColor: 'transparent',
      },
      '& .MuiOutlinedInput-notchedOutline': {
        borderColor: 'transparent',
      },
    },
  }),
);
