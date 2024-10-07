import { instance } from './interceptor';

type UserType = 'PERSONAL' | 'COMPANY';

export type SignupType = {
  account_id: string;
  password: string;
  name: string;
  phone_number: string;
  tag_name: string[];
  user_type: UserType;
};

export const signup = async (data: SignupType) => {
  return await instance({
    method: 'POST',
    url: '/auth/signup',
    data: data,
  });
};
