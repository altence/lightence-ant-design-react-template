import { setTokenToHeader, axiosMockAdapter } from 'services/api.service';
import axios from 'axios';

const AUTH_RESPONSE = {
  token: 'authToken',
  refreshToken: 'refreshToken',
  expirationDate: 'date',
};

axiosMockAdapter.onPost('/login').reply(() => {
  return new Promise((res) => {
    setTimeout(() => {
      res([200, AUTH_RESPONSE]);
    }, 1000);
  });
});

axiosMockAdapter.onPost('/signUp').reply(() => {
  return new Promise((res) => {
    setTimeout(() => {
      res([200, AUTH_RESPONSE]);
    }, 1000);
  });
});

axiosMockAdapter.onPost('/forgotPassword').reply(() => {
  return new Promise((res) => {
    setTimeout(() => {
      res([200]);
    }, 1000);
  });
});

axiosMockAdapter.onPost('/verifyEmail').reply(() => {
  return new Promise((res) => {
    setTimeout(() => {
      res([200]);
    }, 1000);
  });
});

axiosMockAdapter.onPost('/newPassword').reply(() => {
  return new Promise((res) => {
    setTimeout(() => {
      res([200]);
    }, 1000);
  });
});

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
  return axios.post<TokenData>('/login', { ...authData }).then((res) => {
    setTokenToHeader('authToken');
    return res.data;
  });
};

export const signUp = (signUpData: SignUpData): Promise<TokenData> => {
  return axios.post<TokenData>('/signUp', { ...signUpData }).then((res) => {
    setTokenToHeader('authToken');
    return res.data;
  });
};

export const forgotPassword = (forgotPasswordData: ForgotPasswordData): Promise<boolean> => {
  return axios.post<boolean>('/forgotPassword', { ...forgotPasswordData }).then(() => {
    return true;
  });
};

export const verifyEmail = (verifyEmailData: VerifyEmailData): Promise<boolean> => {
  return axios.post<boolean>('/verifyEmail', { ...verifyEmailData }).then(() => {
    return true;
  });
};

export const setNewPassword = (newPasswordData: NewPasswordData): Promise<boolean> => {
  return axios.post<boolean>('/newPassword', { ...newPasswordData }).then(() => {
    return true;
  });
};
