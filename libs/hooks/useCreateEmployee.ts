import { useCallback, useState } from "react";
import { createEmployee } from "services/employee";

const useReachOutQuota = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsloading] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [error, setError] = useState<any>({});

  const mutation = useCallback(async () => {
    try {
      setIsloading(true);
      const data = await createEmployee();

      setData(data);
      setIsSuccess(true);
    } catch (error: any) {
      setError(error);

      setIsSuccess(false);

      setIsError(true);
    } finally {
      setIsloading(false);
    }
  }, []);

  return {
    mutation,
    data,
    isLoading,
    isSuccess,
    error,
    isError,
  };
};

export default useReachOutQuota;
