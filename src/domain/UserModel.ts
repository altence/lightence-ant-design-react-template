import { TwoFactorAuthOption } from '@app/interfaces/interfaces';

export interface UserModel {
  id: number;
  firstName: string;
  lastName: string;
  imgUrl: string;
  userName: string;
  email: {
    name: string;
    verified: boolean;
  };
  phone: {
    number: string;
    verified: boolean;
  };
  twoFactorAuth: {
    enabled: boolean;
    type: TwoFactorAuthOption;
  };
  sex: 'male' | 'female';
  birthday: string;
  lang: 'en' | 'de';
  country: string;
  city: string;
  address1: string;
  address2?: string;
  zipcode: number;
  website?: string;
  socials?: {
    twitter?: string;
    facebook?: string;
    linkedin?: string;
  };
}
