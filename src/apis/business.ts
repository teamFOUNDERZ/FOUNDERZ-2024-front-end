import { instance } from "./interceptor";

/**
 * @returns 사업 아이템 목록 조회 response
 * - business_id: string
 * - business_name: string
 * - one_line_introduction: string 
 * - investment_amount: number
 * - tags: {tag_id: string, tag_name: string}
 */
export const getAllBusiness = async () => {
    return await instance({
        method: 'GET',
        url: '/api/business',
    });
};

/**
 * @returns 사업 아이템 단일 조회 response
 * - business_id: string
 * - business_name: string
 * - one_line_introduction: string 
 * - investment_amount: number
 * - tags: {tag_id: string, tag_name: string}
 * - vision: string
 * - write_purpose: string
 * - business_introduction: string
 */
export const getBusiness = async (id: string) => {
    return await instance({
        method: 'GET',
        url: `/api/business/${id}`,
    });
}

type writeBusinessType = {
    business_name: string,
    one_line_introduction: string,
    business_introduction: string,
    vision: string,
    write_purpose: string,
    tag_ids: string[]
}

// export const writeBusiness = async (data: writeBusinessType) => {
//     return await instance({
//         method: 'POST',
//         url: '/api/business',
//         data: data,
//     });
// }


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
