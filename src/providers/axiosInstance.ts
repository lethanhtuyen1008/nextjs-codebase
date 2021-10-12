import axios from "axios";
import { NextApiRequest } from "next";
import { getGuestToken } from "src/helpers/guestUtil";
import { getTokenFromLocal } from "src/helpers/userUtil";
import { TOKEN_KEY } from "src/constants/cookieKey";
import {
    HTTP_HEADER_AUTHORIZATION,
    HTTP_HEADER_DEVICE_TYPE,
    HTTP_HEADER_X_ORIGINS_TOKEN,
} from "src/constants/httpHeaders";

const baseApiInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_ENDPOINT,
    headers: {
        [HTTP_HEADER_DEVICE_TYPE]: "Mobile",
    },
});

const authenticatedToken = (req: NextApiRequest): any => {
    const accessToken = req.cookies[TOKEN_KEY];

    const headers: any = {};
    if (accessToken) {
        headers[HTTP_HEADER_AUTHORIZATION] = accessToken;
    }

    baseApiInstance.defaults.headers = {
        ...baseApiInstance.defaults.headers,
        ...headers,
    };

    return baseApiInstance;
};

const xOriginsToken = () => {
    baseApiInstance.defaults.headers = {
        ...baseApiInstance.defaults.headers,
        [HTTP_HEADER_X_ORIGINS_TOKEN]:
            process.env.NEXT_PUBLIC_X_ORIGINS_TOKEN || "",
    };

    return baseApiInstance;
};

export const axiosInstance = {
    authenticatedToken,
    xOriginsToken,
};

export const defaultFetcher = (url: string) => {
    return baseApiInstance.get(url).then(res => res.data);
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

    baseApiInstance.defaults.headers = {
        ...baseApiInstance.defaults.headers,
        [HTTP_HEADER_X_ORIGINS_TOKEN]: process.env.NEXT_PUBLIC_X_ORIGINS_TOKEN,
        ...tokenHeaders,
    };

    let request = baseApiInstance.post;

    if (method === "put") {
        request = baseApiInstance.put;
    }

    return request(url, data).then(res => res.data);
}
