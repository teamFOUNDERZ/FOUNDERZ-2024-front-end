import { instance } from "./interceptor";
import { EventSourcePolyfill } from "event-source-polyfill";

/**
 * @returns 알림 단일 조회 response
 * - notice_id: string
 * - content: string
 * - type: {
 *   - type: string,
 *   - content: string
 * }
 */
export const getNoticeById = async (id: string, token: string) => {
    return await instance({
        method: 'GET',
        url: `/api/notices/${id}`,
        headers: {
            Authorization: `Bearer ${token}`,  
        },
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
export const getAllNotice = async (token: string) => {
    return await instance({
        method: 'GET',
        url: '/api/notices',
        headers: {
            Authorization: `Bearer ${token}`,  
        },
    });
};

/**
 * @returns 알림 실시간 구독 response (sse)
 */
export const subscribeNotice = (token: string) => {
    const eventSource = new EventSourcePolyfill(
        '/api/notices/subscribe',
        {
            headers: {
                Authorization: `Bearer ${token}`,  
            }
        }
    );
    return eventSource;
};
