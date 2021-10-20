import axios from "axios";
import { NextApiRequest } from "next";
import { TOKEN_KEY } from "libs/commons/cookieKey";
import { HTTP_HEADER_AUTHORIZATION } from "libs/commons/httpHeaders";
import { apiEndpoints } from "libs/commons/apiEndpoints";
import { getTokenFromLocal } from "libs/helpers/userUtil";

const internalApiInstance = axios.create({
  baseURL: apiEndpoints.LOCAL_API_PREFIX,
});

export const baseApiInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_ENDPOINT,
});

export const internalApiRequest = (url: string) => {
  return internalApiInstance.get(url).then(res => res.data);
};

const authenticatedToken = (req: NextApiRequest) => {
  const accessToken = req.cookies[TOKEN_KEY];

  let headers: any = {};
  if (accessToken) {
    headers[HTTP_HEADER_AUTHORIZATION] = accessToken;
  }

  baseApiInstance.defaults.headers = {
    ...baseApiInstance.defaults.headers,
    ...headers,
  };

  return baseApiInstance;
};

const authenticatedRequest = () => {
  const accessToken = getTokenFromLocal();

  let headers: any = {};
  if (accessToken) {
    headers[HTTP_HEADER_AUTHORIZATION] = accessToken;
  }

  baseApiInstance.defaults.headers = {
    ...baseApiInstance.defaults.headers,
    ...headers,
  };

  return baseApiInstance;
};

export const axiosInstance = {
  authenticatedToken,
  authenticatedRequest,
};
