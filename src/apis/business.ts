import { instance } from "./interceptor";

/**
 * 사업 아이템 목록 조회 API
 * @returns 사업 아이템 목록
 */
export const getAllBusiness = async () => {
  const response = await instance({
    method: 'GET',
    url: '/api/business',
  });
  return response.data.data; // data 필드만 반환
};

/**
 * 사업 아이템 단일 조회 API
 * @param id 사업 아이템 ID
 * @returns 사업 아이템 상세 정보
 */
export const getBusiness = async (id: string) => {
  const response = await instance({
    method: 'GET',
    url: `/api/business/${id}`,
  });
  return response.data;
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
