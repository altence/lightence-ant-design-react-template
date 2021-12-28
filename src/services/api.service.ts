import axios from 'axios';
import AxiosMockAdapter from 'axios-mock-adapter';

export const axiosMockAdapter = new AxiosMockAdapter(axios);

export const setTokenToHeader = (token: string): void => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};
