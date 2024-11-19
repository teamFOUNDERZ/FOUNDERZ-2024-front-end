import { instance } from "./interceptor";
import { getCookie } from "../utils/cookies";

export interface InvestmentItem {
  investment_id: string;
  business_id: string;
  business_name: string;
  investor_account_id: string;
  investor_name: string;
  investee_name: string;
  status: string;
  investment_amount: number;
  contact: string;
  prefer_contract_period: string;
}

export interface GetInvestmentItem {
  data: InvestmentItem[];
  number_of_data: number;
}

// 받은 투자 요청
export const getInvestment = async (): Promise<InvestmentItem[]> => {
  const token = getCookie('authToken');

  if (!token) {
    console.error('Token is missing');
    return [];
  }

  const response = await instance({
    method: 'GET',
    url: '/api/investment/received-investment',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data.data;
};

export interface GetMyInvestmentItem {
  data: InvestmentItem[];
  number_of_data: number;
}

// 내 투자 요청 조회
export const getMyInvestment = async (): Promise<InvestmentItem[]> => {
  const token = getCookie('authToken');

  if (!token) {
    console.error('Token is missing');
    return [];
  }

  const response = await instance({
    method: 'GET',
    url: '/api/investment/my-investment',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data.data;
};
