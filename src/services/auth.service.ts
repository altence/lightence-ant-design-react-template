interface AuthData {
  token?: string;
  refreshToken?: string;
}

export const setAuthDataToLocalStorage = (authData: AuthData): void => {
  localStorage.setItem('authData', JSON.stringify(authData));
};

export const getAuthDataFromLocalStorage = (): AuthData => {
  const authData = localStorage.getItem('authData');

  if (authData) {
    return JSON.parse(authData);
  } else {
    return {};
  }
};
