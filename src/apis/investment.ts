// api/investment.ts

import { instance } from './interceptor';

export type InvestmentInfoType = {
  investment_id: string;
  investor_name: string;
  investee_name: string;
  investment_amount: number;
  business_name: string;
  prefer_contract_period: string;
};


// import { instance } from './interceptor';

// export type PostListType = {
//   business_id: number;
//   business_name: string;
//   one_liner: string;
//   total_investment: number;
//   tags: { id: number; tagName: string }[];
// };

// export const getPost = async () => {
//   return await instance<PostListType[]>({
//     method: 'GET',
//     url: '/business/all',
//   }).then((res) => res.data);
// };


export const getInvestmentInfo = async (token: string) => {
   return await instance<InvestmentInfoType[]>({
      method: 'GET',
      url: '/investment/received-investment', // 실제 API 경로로 수정
      headers: {
         Authorization: `Bearer ${token}`,
     },
    }).then((res) => res.data);
};
