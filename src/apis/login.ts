import { instance } from './interceptor';

export const login = async (id: string, password: string) => {
  return await instance({
    method: 'POST',
    url: '/api/auth/login',
    data: { identifier: id, password: password },
  }).then((res) => res.data);
};
