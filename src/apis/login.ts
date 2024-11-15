import { instance } from './interceptor';

export const login = async (identifier: string, password: string) => {
  return await instance({
    method: 'POST',
    url: '/api/auth/login',
    data: { identifier: identifier, password: password },
  }).then((res) => res.data);
};
