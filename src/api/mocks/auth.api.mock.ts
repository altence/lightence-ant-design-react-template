import { httpApiMock } from '@app/api/mocks/http.api.mock';
import { AuthData } from '@app/api/auth.api';
import { initValues } from '@app/components/auth/LoginForm/LoginForm';
import avatarImg from '@app/assets/avatars/avatar5.png';

httpApiMock.onPost('login').reply((config) => {
  const data: AuthData = JSON.parse(config.data || '');
  if (data.password === initValues.password) {
    return [
      200,
      {
        token: 'bearerToken',
        user: {
          id: 1,
          firstName: 'Christopher',
          lastName: 'Johnson',
          imgUrl: avatarImg,
          userName: '@john1989',
          email: {
            name: 'john1989@example.com',
            verified: true,
          },
          phone: {
            number: '+18143519459',
            verified: true,
          },
          sex: 'male',
          birthday: '01/26/2022',
          lang: 'en',
          country: 'GB',
          city: 'London',
          address1: '14 London Road',
          zipcode: 5211,
        },
      },
    ];
  } else return [401, { message: 'Invalid Credentials' }];
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
