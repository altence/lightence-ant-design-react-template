import avatarImg from '@app/assets/avatars/avatar5.png';
import { UserModel } from './UserModel';

export const testUser: UserModel = {
  id: 1,
  firstName: 'Christopher',
  lastName: 'Johnson',
  imgUrl: avatarImg,
  nickName: '@john1989',
  email: {
    value: 'christopher.johnson@altence.com',
    verified: false,
  },
  phone: {
    value: '+18143519459',
    verified: true,
  },
  twoFactorAuth: {
    enabled: false,
    type: null,
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
