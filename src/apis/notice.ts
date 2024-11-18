import { instance } from './interceptor';
import { getCookie } from '../utils/cookies';

export const noticeList = async () => {
  const token = getCookie('authToken');

  if (!token) {
    console.error('Token is missing');
    return;
  }

  const response = await instance({
    method: 'GET',
    url: '/api/notices',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data.data;
};

export const noticeDetail = async (noticeId: string) => {
  const token = getCookie('authToken');

  if (!token) {
    console.error('Token is missing');
    return;
  }

  const response = await instance({
    method: 'GET',
    url: `/api/notices/${noticeId}`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};

export const subscribeToNotices = async () => {
  const token = getCookie('authToken');

  if (!token) {
    console.error('Token is missing');
    return;
  }

  const response = await instance({
    method: 'GET',
    url: '/api/notices/subscribe',
    headers: {
      Accept: 'text/event-stream',
      Authorization: `Bearer ${token}`,
    },
    responseType: 'stream',
  });

  return response.data;
};
