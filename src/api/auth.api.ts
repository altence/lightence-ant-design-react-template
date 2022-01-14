import { httpApi } from '@app/api/http.api';
import './mocks/auth.api.mock';
import { UserModel } from '@app/domain/UserModel';

export interface AuthData {
  email: string;
  password: string;
}

export interface TokenData {
  token: string;
  refreshToken: string;
  expirationDate: string;
}

export interface SignUpRequest {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export interface ResetPasswordRequest {
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

export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  token: string;
  user: UserModel;
}

export const login = (loginPayload: LoginRequest): Promise<LoginResponse> =>
  httpApi.post<LoginResponse>('login', { ...loginPayload }).then(({ data }) => data);

export const signUp = (signUpData: SignUpRequest): Promise<undefined> =>
  httpApi.post<undefined>('signUp', { ...signUpData }).then(({ data }) => data);

export const resetPassword = (resetPasswordPayload: ResetPasswordRequest): Promise<undefined> =>
  httpApi.post<undefined>('forgotPassword', { ...resetPasswordPayload }).then(({ data }) => data);

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
