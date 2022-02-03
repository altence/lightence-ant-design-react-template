import { LanguageType, Sex, TwoFactorAuthOption } from '@app/interfaces/interfaces';

export interface UserModel {
  id: number;
  firstName: string;
  lastName: string;
  imgUrl: string;
  nickName: string;
  email: {
    value: string;
    verified: boolean;
  };
  phone: {
    value: string;
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
