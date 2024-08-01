import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://prod-server.xquare.app/founderz',
  timeout: 30000,
});

instance.interceptors.response.use(
  (response) => response,
  async (error) => {
    return Promise.reject(error);
  }
);
