import { testUser } from '@app/domain/testUser';
import { UserModel } from '@app/domain/UserModel';

export const persistToken = (token: string): void => {
  localStorage.setItem('accessToken', token);
};

export const readToken = (): string | null => {
  // Please, use this function in your project
  return localStorage.getItem('accessToken');
};

export const persistUser = (user: UserModel): void => {
  localStorage.setItem('user', JSON.stringify(user));
};

export const readUser = (): UserModel | null => {
  // Please, use this function in your project
  const userStr = localStorage.getItem('user');

  return userStr ? JSON.parse(userStr) : null;
};

export const readAndPersistUser = (): UserModel | null => {
  // Do not use this!
  if (!readUser()) {
    persistUser(testUser);
  }

  return readUser();
};

export const readAndPersistToken = (): string | null => {
  // Do not use this!
  if (!readToken()) {
    persistToken('accessToken');
  }

  return readToken();
};

export const deleteToken = (): void => localStorage.removeItem('accessToken');
export const deleteUser = (): void => localStorage.removeItem('user');
