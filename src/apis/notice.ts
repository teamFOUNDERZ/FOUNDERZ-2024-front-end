import { instance } from "./interceptor";

/**
 * @returns 공지 단일 조회 response
 * - notice_id: string
 * - title: string
 * - content: string
 * - created_at: string
 * - updated_at: string
 */
export const getNoticeById = async (id: string) => {
    return await instance({
        method: 'GET',
        url: `/api/notices/${id}`,
    });
};

/**
 * @returns 공지 목록 조회 response
 * - notices: Array { 
 *  - notice_id: string, 
 *  - title: string, 
 *  - content: string, 
 *  - created_at: string, 
 *  - updated_at: string 
 * }
 */
export const getAllNotices = async () => {
    return await instance({
        method: 'GET',
        url: '/api/notices',
    });
};

/**
 * @returns 공지 실시간 구독 response (sse)
 */
export const subscribeNotices = () => {
    const eventSource = new EventSource('/api/notices/subscribe');
    return eventSource;
};
