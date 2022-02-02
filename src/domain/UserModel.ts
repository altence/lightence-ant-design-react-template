import { LanguageType, Sex, TwoFactorAuthOption } from '@app/interfaces/interfaces';

export interface UserModel {
  id: number;
  firstName: string;
  lastName: string;
  imgUrl: string;
  nickName: string;
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
  sex?: Sex;
  birthday?: string;
  lang?: LanguageType;
  country?: string;
  city?: string;
  address1: string;
  address2?: string;
  zipcode?: number;
  website?: string;
  socials?: {
    twitter?: string;
    facebook?: string;
    linkedin?: string;
  };
}
