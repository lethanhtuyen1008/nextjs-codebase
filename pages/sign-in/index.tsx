import EmailField from 'components/formikField/emailField';
import PasswordField from 'components/formikField/passwordField';
import FormTextField from 'components/formTextField';
import Layout from 'components/layout';
import Button from 'components/materialUI/button';
import Box from '@mui/system/Box';
import { Formik } from 'formik';
import React from 'react';
import { ICO_PASS, ICO_EMAIL } from 'libs/commons/images';
import FormControlIcon from 'components/formControlIcon';
import * as yup from 'yup';
import Language from 'components/language';
export const loginFormSchema = yup.object().shape({});
import { transKeys } from 'libs/helpers/i18n';

export interface LoginFormValue {
  email: string;
  password: string;
}

const loginFormInitValues: LoginFormValue = {
  email: '',
  password: '',
};

const SignInPage = () => {
  const onSubmit = React.useCallback((values: LoginFormValue) => {
    console.log(values);
  }, []);

  return (
    <div>
      <Box mt={1} maxWidth={500} sx={{ display: 'flex', margin: 'auto' }}>
        <Formik<LoginFormValue>
          initialValues={loginFormInitValues}
          validationSchema={loginFormSchema}
          onSubmit={onSubmit}
        >
          {(formikProps) => {
            const { handleSubmit } = formikProps;

            return (
              <form
                onSubmit={(event) => {
                  event.preventDefault();
                  handleSubmit();
                }}
              >
                <Language />

                <FormControlIcon>
                  <img src={ICO_EMAIL} alt={'ico email'} width='16' height='13' />
                  <EmailField autoFocus />
                </FormControlIcon>

                <FormControlIcon>
                  <img src={ICO_PASS} width='16' height='16' />
                  <PasswordField />
                </FormControlIcon>

                <FormTextField name='name' label='Name' />

                <Box textAlign='center'>
                  <Button variant='contained' color='primary' type='submit'>
                    {'Login'}
                  </Button>
                </Box>

                <Box textAlign='center'>
                  <Button>{'Forgot password?'}</Button>
                </Box>
              </form>
            );
          }}
        </Formik>
      </Box>
    </div>
  );
};

SignInPage.getLayout = function getLayout(page: JSX.Element) {
  return <Layout title={transKeys.login_page}>{page}</Layout>;
};

export default SignInPage;
