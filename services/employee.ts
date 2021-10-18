import { apiEndpoints } from "libs/commons/apiEndpoints";
import { axiosClient } from "libs/providers/authProvider";

export function createEmployee(): Promise<any> {
  const formatInput = {
    name: "new name",
  };

  return axiosClient.post<any, any>(apiEndpoints.EMPLOYEE_CREATE, formatInput);
}
