import Layout from "@Components/layout";
import { useRouter } from "next/router";
import React from "react";
import useEmployeeDetail from "src/hooks/useEmployeeDetail";
import * as yup from "yup";
export const loginFormSchema = yup.object().shape({});

const EmployeeDetailPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data } = useEmployeeDetail({ id: id || "" });

  return <div>{data?.name}</div>;
};

EmployeeDetailPage.getLayout = function getLayout(page: JSX.Element) {
  return <Layout title="Employee">{page}</Layout>;
};

export default EmployeeDetailPage;
