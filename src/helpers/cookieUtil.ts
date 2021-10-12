import Cookies from "cookies";
import { COOKIE_MAX_AGE_MINUTES } from "src/constants/commons";
import { isServerSite } from "./utils";

export const setCookie = (
    name: string,
    value: string,
    maxAgeMinutes: number = COOKIE_MAX_AGE_MINUTES,
    cookieServer?: Cookies
): void => {
    let cookie = name + "=" + value;
    cookie += "; max-age=" + maxAgeMinutes * 60 * 60;
    if (isServerSite()) {
        cookieServer?.set(name, value, { maxAge: maxAgeMinutes });
    } else {
        document.cookie = cookie;
    }
};

export const getCookie = (
    name: string,
    defaultValue = "",
    cookieServer?: Cookies
): string => {
    if (isServerSite()) {
        return cookieServer?.get(name) || defaultValue;
    } else {
        const match = document.cookie.match(
            new RegExp("(^| )" + name + "=([^;]+)")
        );
        if (match) {
            return match[2];
        }
    }
    return defaultValue;
};

export const deleteCookie = (name: string): void => {
    setCookie(name, "", -1000);
};

export const deleteAllCookies = (): void => {
    if (!isServerSite()) {
        const cookies = document.cookie.split(";");

        for (const cookie of cookies) {
            const eqPos = cookie.indexOf("=");
            const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
            deleteCookie(name);
        }
    }
};

export const deleteCookies = (names: string[]): void => {
    for (const name of names) {
        deleteCookie(name);
    }
};
