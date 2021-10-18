import Layout from "@Components/layout";
import Button from "@Components/materialUI/button";
import React from "react";
import useEmployees from "libs/hooks/useEmployees";
import * as yup from "yup";
import useCreateEmployee from "libs/hooks/useCreateEmployee";
import CircularProgress from "@mui/material/CircularProgress";
import { toast } from "libs/helpers/toast";
import { transKeys } from "libs/helpers/i18n";
import { useTranslation } from "react-i18next";
import Box from "@mui/material/Box";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Grid, Pagination, Paper } from "@mui/material";
import useStyles from "styles/employee/styles";
import { Spinner } from "@Components/materialUI/spinner";
export const loginFormSchema = yup.object().shape({});

const EmployeePage = () => {
  const [page, setPage] = React.useState(1);
  const { data, mutate, isLoading: isLoadingFetching } = useEmployees(page);
  const { t } = useTranslation();
  const classes = useStyles();

  const { mutation, isLoading, error } = useCreateEmployee();

  const reload = () => {
    mutate();
  };

  const create = async () => {
    mutation()
      .then(() => {
        toast.success(t(transKeys.create_employee_success));
        mutate();
      })
      .catch(() => {
        toast.error(error.message);
      });
  };

  return (
    <div>
      <div className={classes.container}>
        {isLoadingFetching ? (
          <CircularProgress />
        ) : (
          <Grid container spacing={2}>
            {data?.map((item: any) => {
              return (
                <Grid item sm={2} key={item.id}>
                  <Paper elevation={2}>
                    <Box sx={{ minWidth: 275 }}>
                      <CardContent>
                        <Typography variant="h5" component="div">
                          {item.name}
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                          {item.chucdanh}
                        </Typography>
                        <Typography variant="body2">
                          {item.dienthoai}
                        </Typography>
                      </CardContent>
                      <CardActions>
                        <Button size="medium">Learn More</Button>
                      </CardActions>
                    </Box>
                  </Paper>
                </Grid>
              );
            })}
          </Grid>
        )}
        <div className={classes.list}>
          <Pagination
            count={5}
            onChange={(_e: any, page: number) => setPage(page)}
          />
        </div>

        <Button onClick={() => reload()} variant="contained">
          Reload
        </Button>

        <Button onClick={() => create()} variant="contained">
          Create
        </Button>
      </div>
    </div>
  );
};

EmployeePage.getLayout = function getLayout(page: JSX.Element) {
  return <Layout title={transKeys.employee_page}>{page}</Layout>;
};

export default EmployeePage;
