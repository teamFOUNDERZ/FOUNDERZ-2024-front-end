import { instance } from './interceptor';

export const login = async (id: string, password: string) => {
  return await instance({
    method: 'POST',
    url: '/auth/login',
    data: { account_id: id, password: password },
  }).then((res) => res.data);
};
