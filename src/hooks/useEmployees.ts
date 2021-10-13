import { apiEndpoints } from "src/commons/apiEndpoints";
import useSWR from "swr";
import { internalApiRequest } from "src/providers/axiosInstance";

function formatUrl() {
  return apiEndpoints.EMPLOYEE;
}

function useEmployees() {
  const url = formatUrl();

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
