import EmailField from "@Components/formikField/emailField";
import PasswordField from "@Components/formikField/passwordField";
import FormTextField from "@Components/formTextField";
import Layout from "@Components/layout";
import Button from "@Components/materialUI/button";
import { Typography } from "@mui/material";
import Box from "@mui/system/Box";
import { Formik } from "formik";
import React from "react";
import { useTranslation } from "react-i18next";
import { Image } from "src/commons/images";
import FormControlIcon from "src/components/formControlIcon";
import useStyles from "src/styles/sign-in/style";
import * as yup from "yup";
export const loginFormSchema = yup.object().shape({});
export interface LoginFormValue {
  email: string;
  password: string;
}

const loginFormInitValues: LoginFormValue = {
  email: "",
  password: "",
};

const SignInPage = () => {
  const classes = useStyles();
  const { t } = useTranslation();

  const onSubmit = React.useCallback((values: LoginFormValue) => {
    console.log(values);
  }, []);

  return (
    <div>
      <Box textAlign="center" className={classes.isDesktop} mb={7}>
        logo
      </Box>

      <Box mb={3}>
        <Typography align="center" component="h1" variant="h3">
          {t("Sign in to your account")}
        </Typography>
      </Box>
      <Box mt={1} className={classes.form}>
        <Formik<LoginFormValue>
          initialValues={loginFormInitValues}
          validationSchema={loginFormSchema}
          onSubmit={onSubmit}
        >
          {formikProps => {
            const { handleSubmit } = formikProps;

            return (
              <form
                onSubmit={event => {
                  event.preventDefault();
                  handleSubmit();
                }}
              >
                <FormControlIcon classes={classes.formControlEmail}>
                  <img
                    src={Image.ICO_EMAIL}
                    alt={t("ico email")}
                    width="16"
                    height="13"
                    className={classes.iconEmail}
                  />
                  <EmailField autoFocus />
                </FormControlIcon>

                <FormControlIcon classes={classes.formControlPass}>
                  <img
                    src={Image.ICO_PASS}
                    alt={t("ico pass")}
                    width="16"
                    height="16"
                    className={classes.iconEmail}
                  />
                  <PasswordField />
                </FormControlIcon>

                <FormTextField name="name" label="Name" />

                <Box textAlign="center">
                  <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    className={classes.submit}
                  >
                    {t("Login")}
                  </Button>
                </Box>

                <Box textAlign="center">
                  <Button>{t("Forgot password?")}</Button>
                </Box>
              </form>
            );
          }}
        </Formik>
      </Box>
      <Box className={classes.boxLink}></Box>
    </div>
  );
};

SignInPage.getLayout = function getLayout(page: JSX.Element) {
  return <Layout title="Sign in">{page}</Layout>;
};

export default SignInPage;
