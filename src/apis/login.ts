import { instance } from './interceptor';

export const login = async (id: string, password: string) => {
  try {
    const response = await instance({
      method: 'POST',
      url: '/api/auth/login',
      data: { identifier: id, password: password },
    });
    const token = response.data.token;
    sessionStorage.setItem('authToken', token);

    return response.data;
  } catch (error) {
    console.error('로그인 실패:', error);
    throw error;
  }
};
