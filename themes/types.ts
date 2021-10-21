import { Theme as MUITheme } from '@mui/material';
import variables from './variables';
import styles from './styles';

export type AppVariable = typeof variables;
export type AppStyle = typeof styles;

export interface AppTheme extends MUITheme {
  variables: AppVariable;
  styles: AppStyle;
}
