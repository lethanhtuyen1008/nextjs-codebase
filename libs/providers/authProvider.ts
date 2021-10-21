import { cookieProvider } from '@devblock/react-auth/dist/core/cookieProvider';
import { JwtAuthProvider } from '@devblock/react-auth/dist/providers/jwt';
import { JwtSignInRequest, JwtSignInResponse } from '@devblock/react-auth/dist/providers/jwt/types';
import { AxiosInstance } from 'axios';
import { apiEndpoints } from 'libs/commons/apiEndpoints';
import { TOKEN_KEY } from 'libs/commons/cookieKey';
import { LOGOUT } from 'libs/routers/routeName';

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
    axiosClient.defaults.baseURL = process.env.NEXT_PUBLIC_API_ENDPOINT || '';
  }

  async signOut(): Promise<any> {
    await super.signOut();
  }

  async signIn(request: JwtSignInRequest): Promise<JwtSignInResponse> {
    const response = await this.axiosClient.post<any, JwtSignInResponse>(
      this.endpoints.signIn,
      request,
    );

    if (response.token) {
      cookieProvider.set(this.accessTokenKey, response.token);
      cookieProvider.set(this.refreshTokenKey, response.refreshToken as string);
    }
    return response;
  }
}

export const authProvider = new AppAuthProvider();
export const axiosClient = authProvider.axiosClient;
