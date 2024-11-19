import { instance } from './interceptor';

type SpecialContractMattersType = string[];

type AgreementFormType = {
  investment_id: string;
  investor_name: string;
  investee_name: string;
  investment_amount: number;
  prefer_contract_period: string; // ISO 8601 형식 (YYYY-MM-DD)
  finally_contract_period: string; // ISO 8601 형식 (YYYY-MM-DD)
  profit: number;
  deposit_day: number;
  repayment_delay_day: number;
  delinquent_quarter: number;
  delinquent_damages: number;
  special_contract_matters: SpecialContractMattersType;
  address: string;
  representative_name: string;
  contact: string;
  signature_image_url: string;
};

type RepaymentFormType = { // 상환 
  investment_id: string;
  repayment_amount: number;
  repayment_date: string; // ISO 8601 형식 (YYYY-MM-DDTHH:mm:ss.sssZ)
};

export type writeAfreementType = {
  agreement_form: AgreementFormType;
  repayment_forms: RepaymentFormType[];
};

/**
 * @param data 자금 투자 계약서 작성 데이터
 * @param token 인증 토큰
 * @returns 자금 투자 계약서 작성 결과 response
 */
export const postWriteAfreement = async (data: writeAfreementType, token: string) => {
  return await instance({
    method: 'POST',
    url: '/api/agreement/write',
    data: data,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
