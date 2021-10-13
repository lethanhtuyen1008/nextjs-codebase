import { TOKEN_KEY } from "src/constants/cookieKey";
import { getCookie, setCookie } from "./cookieUtil";
import Cookies from "cookies";

export function isLogged(): boolean {
  return !!getCookie(TOKEN_KEY);
}

export function storeTokenToLocal(token: string) {
  return setCookie(TOKEN_KEY, token);
}

export function getTokenFromLocal(cookieServer?: Cookies) {
  return getCookie(TOKEN_KEY, "", cookieServer);
}
