import { UserModel } from '@app/domain/UserModel';
import avatarImg from '@app/assets/avatars/avatar5.png';

const testUser = {
  id: 1,
  firstName: 'Christopher',
  lastName: 'Johnson',
  imgUrl: avatarImg,
  userName: '@john1989',
  email: {
    name: 'christopher.johnson@altence.com',
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
  website: 'altence.com',
  socials: {
    twitter: '@altence_team',
    facebook: 'https://facebook.com/groups/1076577369582221',
    linkedin: 'https://linkedin.com/company/altence',
  },
};

export const persistToken = (token: string): void => {
  localStorage.setItem('accessToken', token);
};

export const readToken = (): string => {
  return localStorage.getItem('accessToken') || 'bearerToken';
};

export const persistUser = (user: UserModel): void => {
  localStorage.setItem('user', JSON.stringify(user));
};

export const readUser = (): UserModel | null => {
  const userStr = localStorage.getItem('user');

  return userStr ? JSON.parse(userStr) : testUser;
};

export const deleteToken = (): void => localStorage.removeItem('accessToken');
export const deleteUser = (): void => localStorage.removeItem('user');
