import { apiEndpoints } from "libs/commons/apiEndpoints";
import useSWR from "swr";
import { internalApiRequest } from "libs/providers/axiosInstance";

function formatUrl(page: number, pageSize: number = 12) {
  const params = [];
  page && params.push(`page=${page}`);
  pageSize && params.push(`limit=${pageSize}`);
  return apiEndpoints.EMPLOYEE + "?" + params.join("&");
}

function useEmployees(page: number) {
  const url = formatUrl(page);

  const { data, error, mutate } = useSWR<any[]>(url, internalApiRequest, {
    revalidateOnFocus: false,
    refreshInterval: 0,
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
