import { cookieProvider } from "@devblock/react-auth/dist/core/cookieProvider";
import { JwtAuthProvider } from "@devblock/react-auth/dist/providers/jwt";
import {
  JwtSignInRequest,
  JwtSignInResponse,
} from "@devblock/react-auth/dist/providers/jwt/types";
import { AxiosInstance } from "axios";
import { apiEndpoints } from "libs/commons/apiEndpoints";
import { TOKEN_KEY } from "libs/commons/cookieKey";
import { LOGOUT } from "libs/routers/routeName";
import { useHistory } from "libs/helpers/router";

export class AppAuthProvider extends JwtAuthProvider {
  constructor() {
    super({
      accessTokenKey: TOKEN_KEY,
      refreshTokenKey: TOKEN_KEY,
      endpoints: {
        signIn: apiEndpoints.SIGN_IN,
        signUp: apiEndpoints.SIGN_UP,
        renewToken: apiEndpoints.SIGN_UP,
        updatePassword: apiEndpoints.SIGN_UP,
        accountVerification: apiEndpoints.SIGN_UP,
        sendResetPasswordEmail: apiEndpoints.SIGN_UP,
        sendVerificationEmail: apiEndpoints.SIGN_UP,
      },
    });
  }

  initializeAxiosClient(axiosClient: AxiosInstance): void {
    super.initializeAxiosClient(axiosClient);
    axiosClient.defaults.baseURL = process.env.NEXT_PUBLIC_API_ENDPOINT || "";
  }

  async signOut(): Promise<any> {
    const history = useHistory();

    await super.signOut();
    history.replace(LOGOUT);
  }

  async signIn(request: JwtSignInRequest): Promise<JwtSignInResponse> {
    const response = await this.axiosClient.post<any, JwtSignInResponse>(
      this.endpoints.signIn,
      request
    );

    if (response.token) {
      cookieProvider.set(this.accessTokenKey, response.token);
      cookieProvider.set(this.refreshTokenKey, response.refreshToken as string);
    }
    return response;
  }

  async onResponseRejected(error: any): Promise<any> {
    const response = error.response;
    const currentRefreshToken = cookieProvider.get(this.refreshTokenKey);
    const errorCode = response?.status || error.status;

    if (currentRefreshToken && errorCode === 401) {
      if (!this.renewalTask) {
        this.renewalTask = this.renewToken({
          refreshToken: currentRefreshToken,
        })
          .catch(() => this.signOut())
          .finally(() => (this.renewalTask = null));
      }

      const { token, refreshToken } = (await this.renewalTask) || {};

      if (token && refreshToken) {
        cookieProvider.set(this.accessTokenKey, token);
        cookieProvider.set(this.refreshTokenKey, refreshToken);
        const originalRequest = error.config;
        return this.axiosClient(originalRequest);
      }
    }

    if (this.isSignedIn()) {
      this.signOut();
    }

    return Promise.reject(error.response?.data || error);
  }
}

export const authProvider = new AppAuthProvider();
export const axiosClient = authProvider.axiosClient;
