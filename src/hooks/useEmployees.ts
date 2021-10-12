import { xOriginsTokenFetcher } from "src/providers/axiosInstance";
import { apiEndpoints } from "src/constants/apiEndpoints";
import useSWR from "swr";

function formatUrl() {
    return apiEndpoints.EMPLOYEE;
}

function useEmployees() {
    const url = formatUrl();
    const { data, error } = useSWR<{ data: any[]; total: number }>(
        url,
        xOriginsTokenFetcher
    );

    return {
        total: data?.total || 0,
        products: data?.data || [],
        isLoading: !error && !data,
        isError: error,
    };
}

export default useEmployees;
