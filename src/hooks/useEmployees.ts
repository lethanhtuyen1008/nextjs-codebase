import { defaultFetcher } from "src/providers/axiosInstance";
import { apiEndpoints } from "src/constants/apiEndpoints";
import useSWR from "swr";
import { HIDE_SPINNER, SHOW_SPINNER } from "src/redux/spinner/spinnerType";
import { toast } from "src/helpers/toast";
import { useDispatch } from "react-redux";

function formatUrl() {
    return apiEndpoints.EMPLOYEE;
}

function useEmployees() {
    const url = formatUrl();
    const dispatch = useDispatch();

    const { data, error } = useSWR<any[]>(url, defaultFetcher, {
        revalidateOnFocus: false,
        refreshInterval: 0,
        onError: () => {
            toast.error("Get data failed!");
            dispatch({ type: HIDE_SPINNER });
        },
        onSuccess: () => {
            dispatch({ type: HIDE_SPINNER });
            toast.success("Get data success!");
        },
        onLoadingSlow: () => {
            dispatch({ type: SHOW_SPINNER });
        },
        loadingTimeout: 800,
    });

    return {
        total: data?.length,
        data: data || [],
        isLoading: !error && !data,
        isError: error,
    };
}

export default useEmployees;
