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
            name: 'christopher.johnson@altence.com',
            verified: false,
          },
          phone: {
            number: '+18143519459',
            verified: false,
          },
          sex: 'male',
          birthday: '01/26/2022',
          lang: 'en',
          country: 'GB',
          city: 'London',
          address1: '14 London Road',
          zipcode: 5211,
          website: 'altence.com',
          socials: {
            twitter: '@altence_team',
            facebook: 'https://facebook.com/groups/1076577369582221',
            linkedin: 'https://linkedin.com/company/altence',
          },
        },
      },
    ];
  } else return [401, { message: 'Invalid Credentials' }];
});

httpApiMock.onPost('signUp').reply(200);

httpApiMock.onPost('forgotPassword').reply(200);

httpApiMock.onPost('verifySecurityCode').reply(200);

httpApiMock.onPost('setNewPassword').reply(200);
