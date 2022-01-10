import { CreditCard } from 'components/profile/ProfileCard/ProfileFormNav/nav/payments/paymentMethod/paymentForm/interfaces';
import avatarImg from '@app/assets/avatars/avatar5.png';

export interface User {
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

interface UserData {
  firstName: string;
  lastName: string;
  nickName: string;
  sex: string;
  birthday: string;
  language: string;
  phone: string;
  email: string;
  country: string;
  city: string;
  address1: string;
  address2: string;
  zipcode: string;
  website: string;
  twitter: string;
  linkedin: string;
  facebook: string;
}

interface PasswordData {
  password: string;
  newPassword: string;
  confirmPassword: string;
}

interface AuthData {
  phone: string;
  email: string;
}

interface NotificationsData {
  1: string[];
  2: string[];
  3: string[];
}

export const getUser = (): Promise<User> => {
  return new Promise((res) => {
    setTimeout(() => {
      res({
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
      });
    }, 1000);
  });
};

export const updateUser = (userData: UserData): Promise<UserData> => {
  return new Promise((res) => {
    setTimeout(() => {
      res(userData);
    }, 1000);
  });
};

export const updatePassword = (passwordData: PasswordData): Promise<PasswordData> => {
  return new Promise((res) => {
    setTimeout(() => {
      res(passwordData);
    }, 1000);
  });
};

export const update2FA = (authData: AuthData): Promise<AuthData> => {
  return new Promise((res) => {
    setTimeout(() => {
      res(authData);
    }, 1000);
  });
};

export const updateNotifications = (notificationsData: NotificationsData): Promise<NotificationsData> => {
  return new Promise((res) => {
    setTimeout(() => {
      res(notificationsData);
    }, 1000);
  });
};

export const addCreditCard = (creditCard: CreditCard): Promise<CreditCard> => {
  return new Promise((res) => {
    setTimeout(() => {
      res(creditCard);
    }, 1000);
  });
};

export const updateCreditCard = (creditCard: CreditCard): Promise<CreditCard> => {
  return new Promise((res) => {
    setTimeout(() => {
      res(creditCard);
    }, 1000);
  });
};
