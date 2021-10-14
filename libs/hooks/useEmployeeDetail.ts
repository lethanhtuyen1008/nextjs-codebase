import { apiEndpoints } from "libs/commons/apiEndpoints";
import { formatString } from "libs/helpers/utils";
import useSWR from "swr";
import { internalApiRequest } from "libs/providers/axiosInstance";

export default function useEmployeeDetail(request: { id: string | string[] }) {
  const { id } = request;
  const url = id ? formatString(apiEndpoints.EMPLOYEE_DETAIL, { id }) : null;

  return useSWR<any, any>(url, () =>
    internalApiRequest(url!).then((data: any) => {
      return data;
    })
  );
}
