import { useRouter } from "next/router";

export const useHistory = () => {
  const history = useRouter();

  return history;
};
