import { httpApiMock } from '@app/api/mocks/http.api.mock';
import { AuthData } from '@app/api/auth.api';
import { initValues } from '@app/components/auth/LoginForm/LoginForm';

httpApiMock.onPost('login').reply((config) => {
  const data: AuthData = JSON.parse(config.data || '');
  if (data.password === initValues.password) {
    return [200, { token: 'bearerToken' }];
  } else return [400, { message: 'Invalid Credentials' }];
});

httpApiMock.onPost('/signUp').reply(() => {
  return new Promise((res) => {
    setTimeout(() => {
      res([200, AUTH_RESPONSE]);
    }, 1000);
  });
});

httpApiMock.onPost('/forgotPassword').reply(() => {
  return new Promise((res) => {
    setTimeout(() => {
      res([200]);
    }, 1000);
  });
});

httpApiMock.onPost('/verifyEmail').reply(() => {
  return new Promise((res) => {
    setTimeout(() => {
      res([200]);
    }, 1000);
  });
});

httpApiMock.onPost('/newPassword').reply(() => {
  return new Promise((res) => {
    setTimeout(() => {
      res([200]);
    }, 1000);
  });
});

const AUTH_RESPONSE = {
  token: 'authToken123',
  refreshToken: 'refreshToken',
  expirationDate: 'date',
};
