import { instance } from './interceptor';

export type UserType = 'PERSONAL' | 'COMPANY';

export type SignupType = {
  account_id: string;
  password: string;
  name: string;
  phone_number: string;
  tag_ids: string[];
  type: UserType;
};

export const signup = async (data: SignupType) => {
  return await instance({
    method: 'POST',
    url: '/api/auth/register',
    data: data,
  });
};
