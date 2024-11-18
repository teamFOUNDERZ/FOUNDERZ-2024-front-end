import { instance } from "./interceptor";
import { getCookie } from "../utils/cookies";

interface BusinessItem {
  business_id: string;
  business_name: string;
  one_line_introduction: string;
  tags: { tag_id: string; tag_name: string }[];
  number_of_data: number;
}

/**
 * 사업 아이템 목록 조회 API
 * @returns 사업 아이템 목록
 */
export const getAllBusiness = async (): Promise<BusinessItem[]> => {
  const token = getCookie('authToken');

  if (!token) {
    console.error('Token is missing');
    return [];
  }

  const response = await instance({
    method: 'GET',
    url: '/api/business',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data.data as BusinessItem[];
};



export interface BusinessItemDetail {
  business_id: string;
  business_name: string;
  one_line_introduction: string;
  tags: { tag_id: string; tag_name: string }[];
  vison: string;
  write_purpose: string;
  business_introduction: string;
  investment_amount: number;
}

/**
 * 사업 아이템 단일 조회 API
 * @param businessId 사업 아이템 businessId
 * @returns 사업 아이템 상세 정보
 */
export const getBusiness = async (businessId: string): Promise<BusinessItemDetail | undefined> => {
  const token = getCookie('authToken');

  if (!token) {
    console.error('Token is missing');
    return;
  }

  const response = await instance({
    method: 'GET',
    url: `/api/business/${businessId}`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data as BusinessItemDetail;
};



type writeBusinessType = {
  business_name: string;
  one_line_introduction: string;
  business_introduction: string;
  vision: string;
  write_purpose: string;
  tag_ids: string[];
};

// 박예빈
/**
 * @param 사업 아이템 작성 요청 데이터
 * @returns 작성된 사업 아이템 response
 */
export const writeBusinessItem = async (data: writeBusinessType, token: string) => {
    return await instance({
        method: 'POST',
        url: '/api/business/write',
        data: data,
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
};
