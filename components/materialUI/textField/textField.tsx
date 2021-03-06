import { InputAdornment } from '@mui/material';
import MaterialTextField from '@mui/material/TextField';
import React, { useMemo } from 'react';
import useHelperTextStyle from 'components/materialUI/formHelperText/style';
import useInputLabelStyle from 'components/materialUI/inputLabel/style';
import withStylePreview from 'components/materialUI/inputLabel/stylePreview';
import useStyle from './style';
import { Props } from './types';

const PreviewTextField = withStylePreview(MaterialTextField);

export const TextField = (props: Props) => {
  const classes = useStyle();
  const inputLabelClasses = useInputLabelStyle();
  const helperTextClasses = useHelperTextStyle();
  const { label, canPreview, shrink, ...others } = props;
  const helperTextProps = useMemo(
    () => ({
      classes: helperTextClasses,
    }),
    [helperTextClasses],
  );

  const inputLabelProps = useMemo(
    () => ({
      classes: inputLabelClasses,
      shrink,
    }),
    [inputLabelClasses, shrink],
  );

  return canPreview ? (
    <PreviewTextField
      InputLabelProps={{ shrink: true }}
      FormHelperTextProps={{ ...helperTextProps }}
      InputProps={{
        endAdornment: <InputAdornment position='end'></InputAdornment>,
      }}
      classes={{ root: !label ? classes.hideLabel : classes.showLabel }}
      label={label}
      {...others}
    />
  ) : (
    <MaterialTextField
      InputLabelProps={{ ...inputLabelProps }}
      FormHelperTextProps={{ ...helperTextProps }}
      classes={{ root: !label ? classes.hideLabel : classes.showLabel }}
      label={label}
      {...others}
    />
  );
};

TextField.defaultProps = {
  variant: 'outlined',
  fullWidth: true,
  margin: 'normal',
} as Props;

export default TextField;
