import FormTextField from "@Components/formTextField/formTextField";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import { TextFieldProps } from "@mui/material/TextField";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const PasswordField = (props: TextFieldProps) => {
    const { t } = useTranslation();

    const [showPassword, setShowPassword] = useState<Boolean>(false);

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const InputAdornmentPwd = (
        <InputAdornment position="end">
            <IconButton
                onClick={handleClickShowPassword}
                aria-label="toggle password visibility"
                edge="end"
            >
                {!showPassword ? <Visibility /> : <VisibilityOff />}
            </IconButton>
        </InputAdornment>
    );

    return (
        <FormTextField
            InputProps={{ endAdornment: InputAdornmentPwd }}
            name="password"
            label={t("Password")}
            type={showPassword ? "text" : "password"}
            autoComplete="current-password"
            {...props}
        />
    );
};

export default PasswordField;
