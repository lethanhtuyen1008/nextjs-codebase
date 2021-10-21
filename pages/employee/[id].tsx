import { Paper } from '@mui/material';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Layout from 'components/layout';
import { apiEndpoints } from 'libs/commons/apiEndpoints';
import Head from 'next/head';
import React from 'react';

const EmployeeDetailPage = (props: { employee: any }) => {
  const { employee } = props;

  return (
    <div>
      <Head>
        <title>{employee?.name}</title>
      </Head>

      <Paper elevation={2} sx={{ width: 300 }}>
        <Box sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography variant='h5' component='div'>
              {employee.name}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color='text.secondary'>
              {employee.chucdanh}
            </Typography>
            <Typography variant='body2'>{employee.dienthoai}</Typography>
          </CardContent>
        </Box>
      </Paper>
    </div>
  );
};

EmployeeDetailPage.getLayout = function getLayout(page: JSX.Element) {
  return <Layout title='Employee'>{page}</Layout>;
};

export const getStaticProps = async (context: any) => {
  const res = await fetch(
    `https://5da6f06a127ab80014c1da65.mockapi.io/${apiEndpoints.EMPLOYEE}/${context.params.id}`,
  );
  const employee = await res.json();
  return {
    props: { employee },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch('https://5da6f06a127ab80014c1da65.mockapi.io/' + apiEndpoints.EMPLOYEE);
  const data = await res.json();

  const paths = data.map((item: any) => {
    return { params: { id: item.id.toString() } };
  });
  return { paths, fallback: false };
};

export default EmployeeDetailPage;
