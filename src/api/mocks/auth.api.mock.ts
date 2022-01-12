import { httpApiMock } from '@app/api/mocks/http.api.mock';

httpApiMock.onPost('login').reply(200, { token: 'bearerToken' });

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
