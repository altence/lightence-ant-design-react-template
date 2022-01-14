import { CreditCard } from 'components/profile/ProfileCard/ProfileFormNav/nav/payments/paymentMethod/paymentForm/interfaces';

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
