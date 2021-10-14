import { TextFieldProps } from "@mui/material/TextField";
import React from "react";
import { useTranslation } from "react-i18next";
import FormTextField from "../../formTextField";

const EmailField = (props: TextFieldProps) => {
    const { t } = useTranslation();

    return (
        <FormTextField
            id="email"
            label={t("Email")}
            name="email"
            autoComplete="email"
            {...props}
        />
    );
};

export default EmailField;
