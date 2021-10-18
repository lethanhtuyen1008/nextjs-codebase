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
export const loginFormSchema = yup.object().shape({});

const EmployeePage = () => {
  const { data, mutate } = useEmployees();
  const { t } = useTranslation();

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
      {data?.map((item: any) => {
        return <div key={item.id}>{item.name}</div>;
      })}
      <Button onClick={() => reload()} variant="contained">
        Reload
      </Button>

      <Button onClick={() => create()} variant="contained">
        Create
      </Button>
      {isLoading && <CircularProgress />}
    </div>
  );
};

EmployeePage.getLayout = function getLayout(page: JSX.Element) {
  return <Layout title={transKeys.employee_page}>{page}</Layout>;
};

export default EmployeePage;
