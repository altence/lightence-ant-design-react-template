import axios from 'axios';

export const httpApi = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

httpApi.interceptors.request.use((config) => {
  config.headers = { ...config.headers, Authorization: 'Bearer test' };

  return config;
});
