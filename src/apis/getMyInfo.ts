import { getCookie } from '../utils/cookies';
import { instance } from './interceptor';

type MyInfoType = {
  account_id: string;
  name: string;
  user_type: 'PERSONAL' | 'COMPANY';
  phone_number: string;
  tags: { id: number; tagName: string }[];
  my_amount: number;
  receive_invest: {
    sender_name: string;
    invest_money: number;
    invest_type: string;
  }[];
  my_investment: {
    business_name: string;
    invest_money: number;
    invest_type: string;
  };
};

export const getMyInfo = async () => {
  const accessToken = getCookie('accessToken');

  return await instance<MyInfoType>({
    method: 'GET',
    url: '/user/my-info',
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
};
