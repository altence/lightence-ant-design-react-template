import { httpApi } from '@app/api/http.api';
import './mocks/auth.api.mock';

export interface AuthData {
  email: string;
  password: string;
}

export interface TokenData {
  token: string;
  refreshToken: string;
  expirationDate: string;
}

export interface SignUpData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface ForgotPasswordData {
  email: string;
}

export interface VerifyEmailData {
  code: string;
}

export interface NewPasswordData {
  password: string;
  newPassword: string;
  confirmPassword: string;
}

export const login = (authData: AuthData): Promise<TokenData> => {
  return httpApi.post<TokenData>('login', { ...authData }).then(({ data }) => data);
};

export const signUp = (signUpData: SignUpData): Promise<TokenData> => {
  return httpApi.post<TokenData>('signUp', { ...signUpData }).then((res) => {
    return res.data;
  });
};

export const forgotPassword = (forgotPasswordData: ForgotPasswordData): Promise<boolean> => {
  return httpApi.post<boolean>('forgotPassword', { ...forgotPasswordData }).then(() => {
    return true;
  });
};

export const verifyEmail = (verifyEmailData: VerifyEmailData): Promise<boolean> => {
  return httpApi.post<boolean>('verifyEmail', { ...verifyEmailData }).then(() => {
    return true;
  });
};

export const setNewPassword = (newPasswordData: NewPasswordData): Promise<boolean> => {
  return httpApi.post<boolean>('newPassword', { ...newPasswordData }).then(() => {
    return true;
  });
};
