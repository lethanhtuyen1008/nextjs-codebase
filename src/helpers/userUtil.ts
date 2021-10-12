import { GUEST_TOKEN_KEY, STORE_ID, TOKEN_KEY } from "src/constants/cookieKey";
import { getCookie, setCookie } from "./cookieUtil";
import Cookies from "cookies";

export function isLogged(): boolean {
    return !!getCookie(TOKEN_KEY);
}

export function isLoggedAsGuest(): boolean {
    return !!getCookie(GUEST_TOKEN_KEY);
}

export async function getFirebaseToken(): Promise<string> {
    return "token";
}

export function storeTokenToLocal(token: string) {
    return setCookie(TOKEN_KEY, token);
}

export function getTokenFromLocal(cookieServer?: Cookies) {
    return getCookie(TOKEN_KEY, "", cookieServer);
}

export function saveStoreIdToLocal(storeId: string) {
    if (storeId) {
        setCookie(STORE_ID, storeId);
    }
}
