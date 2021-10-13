import React, { useEffect, useState } from "react";
import FormHelperText from "../formHelperText";
import useStyle from "./style";
import { Props } from "./types";
import clsx from "clsx";
import { useTranslation } from "react-i18next";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

const getItemDefault = (item: any) => `${item}`;

const Dropdown = <E extends unknown = string | number>(props: Props<E>) => {
  const classes = useStyle();
  const { t } = useTranslation();
  const {
    label,
    controlProps,
    labelProps,
    options,
    itemProps,
    getItemValue = getItemDefault,
    getItemLabel = getItemDefault,
    error,
    canPreview,
    required,
    showItemNone,
    helperText,
    ...others
  } = props;

  const [itemList, setItemList] = useState<E[]>(() =>
    Array.isArray(options) ? options : []
  );

  useEffect(() => {
    if (!Array.isArray(options)) {
      options().then(setItemList);
    } else {
      setItemList(options);
    }
  }, [options]);

  return (
    <FormControl
      margin="normal"
      variant="outlined"
      fullWidth
      error={!!error}
      {...controlProps}
    >
      <InputLabel
        shrink={canPreview || undefined}
        className={clsx(canPreview && classes.labelPreview)}
        {...labelProps}
      >
        {label}
        {required && " *"}
      </InputLabel>
      <Select
        label={label}
        className={clsx(canPreview && classes.selectPreview)}
        {...others}
      >
        {showItemNone && <MenuItem value="">{t("None")}</MenuItem>}
        {itemList.map(item => {
          const keyValue = getItemValue(item);
          return (
            <MenuItem key={keyValue} value={keyValue} {...itemProps}>
              {getItemLabel(item)}
            </MenuItem>
          );
        })}
      </Select>
      {!!error && <FormHelperText error>{helperText}</FormHelperText>}
    </FormControl>
  );
};

export default Dropdown;
