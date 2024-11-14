import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://founderz-server.xquare.app/',
  timeout: 30000,
});

instance.interceptors.response.use(
  (response) => response,
  async (error) => {
    return Promise.reject(error);
  }
);
