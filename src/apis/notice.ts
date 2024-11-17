import { instance } from "./interceptor";

/**
 * @returns 알림 단일 조회 response
 * - notice_id: string
 * - content: string
 * - type: {
 *   - type: string,
 *   - content: string
 * }
 */
export const getNoticeById = async (id: string) => {
    return await instance({
        method: 'GET',
        url: `/api/notices/${id}`,
    });
};

/**
 * @returns 알림 목록 조회 response
 * - notices: Array { 
 *   - notice_id: string
 *   - content: string
 *   - type: {
 *     - type: string,
 *     - content: string
 *   }
 * }
 */
export const getAllNotice = async () => {
    return await instance({
        method: 'GET',
        url: '/api/notices',
    });
};

/**
 * @returns 알림 실시간 구독 response (sse)
 */
export const subscribeNotice = () => {
    const eventSource = new EventSource('/api/notices/subscribe');
    return eventSource;
};
