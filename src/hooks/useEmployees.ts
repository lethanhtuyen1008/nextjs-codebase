import { defaultFetcher } from "src/providers/axiosInstance";
import { apiEndpoints } from "src/constants/apiEndpoints";
import useSWR from "swr";
import { useDispatch } from "react-redux";

function formatUrl() {
  return apiEndpoints.EMPLOYEE;
}

function useEmployees() {
  const url = formatUrl();

  const { data, error } = useSWR<any[]>(url, defaultFetcher, {
    revalidateOnFocus: false,
    refreshInterval: 0,
  });

  return {
    total: data?.length,
    data: data || [],
    isLoading: !error && !data,
    isError: error,
  };
}

export default useEmployees;
