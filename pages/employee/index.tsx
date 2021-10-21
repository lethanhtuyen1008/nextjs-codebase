import { Grid, Pagination, Paper } from '@mui/material';
import Box from '@mui/material/Box';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Layout from 'components/layout';
import Button from 'components/materialUI/button';
import { transKeys } from 'libs/helpers/i18n';
import useCreateEmployee from 'libs/hooks/useCreateEmployee';
import { useRouter } from 'next/router';
import React from 'react';
import useStyles from 'styles/employee/styles';

const EmployeePage = (props: any) => {
  const classes = useStyles();
  const router = useRouter();
  const { query } = router;

  const { mutation } = useCreateEmployee();

  const reload = () => {
    const href = `employee/?page=${query?.page || 1}`;
    router.push(href, href, { shallow: false });
  };

  const create = async () => {
    mutation()
      .then(() => {
        reload();
      })
      .catch(() => {});
  };

  const onChangePage = (page: number) => {
    const href = `employee/?page=${page}`;
    router.push(href, href, { shallow: false });
  };

  return (
    <div>
      <div className={classes.container}>
        <Grid container spacing={2}>
          {[].map((item: any) => {
            return (
              <Grid item sm={2} key={item.id}>
                <Paper elevation={2}>
                  <Box sx={{ minWidth: 275 }}>
                    <CardContent>
                      <Typography variant='h5' component='div'>
                        {item.name}
                      </Typography>
                      <Typography sx={{ mb: 1.5 }} color='text.secondary'>
                        {item.chucdanh}
                      </Typography>
                      <Typography variant='body2'>{item.dienthoai}</Typography>
                    </CardContent>
                    <CardActions>
                      <Button size='medium' onClick={() => router.push(`employee/${item.id}`)}>
                        Learn More
                      </Button>
                    </CardActions>
                  </Box>
                </Paper>
              </Grid>
            );
          })}
        </Grid>
        <div className={classes.list}>
          <Pagination
            count={5}
            page={parseInt(props.page) || 1}
            onChange={(_e: any, page: number) => onChangePage(page)}
          />
        </div>

        <Button onClick={() => reload()} variant='contained'>
          Reload
        </Button>

        <Button onClick={() => create()} variant='contained'>
          Create
        </Button>
      </div>
    </div>
  );
};

EmployeePage.getLayout = function getLayout(page: JSX.Element) {
  return <Layout title={transKeys.employee_page}>{page}</Layout>;
};

export const getServerSideProps = async (context: any) => {
  const page = context.query.page || 1;

  const params = [`page=${page}`, 'limit=12'];

  return {
    props: { data: [], page, params },
  };
};

export default EmployeePage;
