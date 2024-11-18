import { instance } from './interceptor';

export const fetchBusinessItems = async () => {
  try {
    const response = await instance({
      method: 'GET',
      url: '/api/business',
    });

    if (response.status === 200) {
      return response.data.data;
    } else {
      throw new Error('API 호출 실패');
    }
  } catch (error) {
    console.error('사업 아이템 API 호출 오류:', error);
    throw error;
  }
};
