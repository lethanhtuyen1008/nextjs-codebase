import axios from "axios";
import { NextApiRequest } from "next";
import { apiEndpoints } from "../constants/apiEndpoints";
import { STORE_ID, TOKEN_KEY } from "../constants/cookieKey";
import {
    HTTP_HEADER_AUTHORIZATION,
    HTTP_HEADER_DEVICE_TYPE,
    HTTP_HEADER_X_ORIGINS_TOKEN,
} from "../constants/httpHeaders";
import { getGuestToken } from "src/helpers/guestUtil";
import { getTokenFromLocal } from "src/helpers/userUtil";

const hubApiInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_ENDPOINT,
    headers: {
        Accept: "application/vnd.originscannabis.v2",
        [HTTP_HEADER_DEVICE_TYPE]: "Mobile",
    },
});

const internalApiInstance = axios.create({
    baseURL: apiEndpoints.LOCAL_API_PREFIX,
});

const wagtailApiInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_SERVER_WAGTAIL,
});
const authenticatedToken = (req: NextApiRequest): any => {
    const accessToken = req.cookies[TOKEN_KEY];

    const headers: any = {};
    if (accessToken) {
        headers[HTTP_HEADER_AUTHORIZATION] = accessToken;
    }

    hubApiInstance.defaults.headers = {
        ...hubApiInstance.defaults.headers,
        ...headers,
    };

    return hubApiInstance;
};

const xOriginsToken = () => {
    hubApiInstance.defaults.headers = {
        ...hubApiInstance.defaults.headers,
        [HTTP_HEADER_X_ORIGINS_TOKEN]:
            process.env.NEXT_PUBLIC_X_ORIGINS_TOKEN || "",
    };

    return hubApiInstance;
};

export const axiosInstance = {
    authenticatedToken,
    xOriginsToken,
};

export const defaultFetcher = (url: string) => {
    return hubApiInstance.get(url).then(res => res.data);
};

export const xOriginsTokenFetcher = (url: string) => {
    return xOriginsToken()
        .get(url)
        .then(res => res.data);
};

export const internalApiFetcher = (url: string) => {
    return internalApiInstance.get(url).then(res => res.data);
};

export const wagtailApiFetcher = <T>(
    url: string,
    params: object = {}
): Promise<T> => {
    return wagtailApiInstance.get(url, { params }).then(res => res.data);
};

export function commonRequester<T, R>(
    url: string,
    data: T,
    method?: "post" | "put"
): Promise<T | R> {
    const tokenHeaders: any = {};
    const guestToken = getGuestToken();
    const userToken = getTokenFromLocal();

    if (guestToken) {
        tokenHeaders["authorization-guest-customer"] = guestToken;
    }

    if (userToken) {
        tokenHeaders["Authorization"] = userToken;
    }

    hubApiInstance.defaults.headers = {
        ...hubApiInstance.defaults.headers,
        [HTTP_HEADER_X_ORIGINS_TOKEN]: process.env.NEXT_PUBLIC_X_ORIGINS_TOKEN,
        ...tokenHeaders,
    };

    let request = hubApiInstance.post;

    if (method === "put") {
        request = hubApiInstance.put;
    }

    return request(url, data).then(res => res.data);
}
