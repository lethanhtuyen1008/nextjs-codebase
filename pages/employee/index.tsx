import Layout from "@Components/layout";
import Button from "@Components/materialUI/button";
import React from "react";
import useEmployees from "src/hooks/useEmployees";
import * as yup from "yup";
export const loginFormSchema = yup.object().shape({});

const EmployeePage = () => {
  const { data, mutate } = useEmployees();

  const reload = () => {
    mutate();
  };

  return (
    <div>
      {data?.map((item: any) => {
        return <div key={item.id}>{item.name}</div>;
      })}
      <Button onClick={() => reload()} variant="contained">
        Reload
      </Button>
    </div>
  );
};

EmployeePage.getLayout = function getLayout(page: JSX.Element) {
  return <Layout title="Employee">{page}</Layout>;
};

export default EmployeePage;
