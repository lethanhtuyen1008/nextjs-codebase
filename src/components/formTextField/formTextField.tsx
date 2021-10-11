import { FormikValues, useFormikContext } from "formik";
import * as React from "react";
import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import TextField from "src/components/materialUI/textField";
import { Props } from "./types";

const FormTextField = (props: Props) => {
    const { name, helperText, ...others } = props;

    const { t } = useTranslation();
    const { values, handleChange, handleBlur, errors, touched } =
        useFormikContext<FormikValues>();

    const textFieldBinders = useMemo(() => {
        const showError = !!touched[name] && !!errors[name];

        return {
            name,
            value: values[name],
            onChange: handleChange,
            error: showError,
            onBlur: handleBlur,
            helperText: showError ? t(errors[name] as string) : helperText,
        };
    }, [
        errors,
        handleBlur,
        handleChange,
        helperText,
        name,
        t,
        touched,
        values,
    ]);

    return <TextField {...textFieldBinders} {...others} />;
};

export default FormTextField;
