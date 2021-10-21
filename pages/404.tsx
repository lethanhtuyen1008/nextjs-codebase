import { Typography } from '@mui/material';
import Box from '@mui/system/Box';
import React from 'react';
import * as yup from 'yup';
export const loginFormSchema = yup.object().shape({});

const ErrorPage = () => {
  return (
    <Box mt={1} sx={{ width: '100%', height: '100vh', display: 'flex' }}>
      <Typography sx={{ textAlign: 'center', margin: 'auto' }}>404 | Page</Typography>
    </Box>
  );
};

export default ErrorPage;
