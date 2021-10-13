import {
  ExtendButtonBase,
  FormControlTypeMap,
  InputLabelProps,
  MenuItemTypeMap,
} from "@mui/material";
import {
  DefaultComponentProps,
  OverridableComponent,
} from "@mui/material/OverridableComponent";
import { SelectProps } from "@mui/material/Select";

export interface Props<E> extends Omit<SelectProps, "error"> {
  controlProps?: DefaultComponentProps<FormControlTypeMap>;
  labelProps?: InputLabelProps;
  canPreview?: boolean;
  itemProps?: OverridableComponent<
    MenuItemTypeMap<{ button: false }, MenuItemTypeMap["defaultComponent"]>
  > &
    ExtendButtonBase<
      MenuItemTypeMap<{ button?: true }, MenuItemTypeMap["defaultComponent"]>
    >;
  options: E[] | (() => Promise<E[]>);
  getItemLabel?: (e: E) => React.ReactNode;
  getItemValue?: (e: E) => string | number;
  error?: React.ReactNode;
  helperText?: string;
  showItemNone?: boolean;
}
