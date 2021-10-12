import { GUEST_TOKEN_KEY } from "src/constants/cookieKey";
import { deleteCookie, getCookie, setCookie } from "./cookieUtil";

export function setGuestToken(token: string) {
    setCookie(GUEST_TOKEN_KEY, token);
}

export function getGuestToken() {
    return getCookie(GUEST_TOKEN_KEY);
}

export function clearGuestToken() {
    return deleteCookie(GUEST_TOKEN_KEY);
}
