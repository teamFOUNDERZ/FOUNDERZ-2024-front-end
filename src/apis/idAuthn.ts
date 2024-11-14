import { instance } from './interceptor';

export const idAuthn = async (accountId: string) => {
  return await instance({
    method: 'GET',
    url: `/api/auth/account-id/validation?account-id=${accountId}`,
  });
};