import { apiEndpoints } from "src/commons/apiEndpoints";
import useSWR from "swr";
import { internalApiRequest } from "src/providers/axiosInstance";
import React from "react";
import { useDispatch } from "react-redux";
import { HIDE_SPINNER, SHOW_SPINNER } from "src/redux/spinner/spinnerType";
import { toast } from "src/helpers/toast";

function formatUrl() {
  return apiEndpoints.EMPLOYEE;
}

function useEmployees() {
  const url = formatUrl();
  const dispatch = useDispatch();

  const { data, error, mutate } = useSWR<any[]>(url, internalApiRequest, {
    revalidateOnFocus: false,
    refreshInterval: 0,
    onLoadingSlow: () => {
      toast.warning("loading!");
      dispatch({ type: SHOW_SPINNER });
    },
    onSuccess: () => {
      dispatch({ type: HIDE_SPINNER });
      toast.success("Get data success!");
    },
    onError: () => {
      dispatch({ type: HIDE_SPINNER });
      toast.error("Get data failed!");
    },
  });

  return {
    total: data?.length,
    data: data || [],
    isLoading: !error && !data,
    isError: error,
    mutate,
  };
}

export default useEmployees;
