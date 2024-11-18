import { instance } from './interceptor';

/**
 * 로그인 API
 * @param id 사용자 ID
 * @param password 사용자 비밀번호
 * @returns 로그인 응답 데이터
 */
export const login = async (id: string, password: string) => {
  try {
    const response = await instance({
      method: 'POST',
      url: '/api/auth/login',
      data: { identifier: id, password: password },
    });

    // 쿠키에 토큰 저장
    const token = response.data.token;
    document.cookie = `authToken=${token}; path=/;`;

    return response.data;
  } catch (error) {
    console.error('로그인 실패:', error);
    throw error;
  }
};

// 인터셉터로 요청 헤더에 토큰 자동 추가
instance.interceptors.request.use(
  (config) => {
    // 쿠키에서 토큰 읽기
    const token = document.cookie
      .split('; ')
      .find((row) => row.startsWith('authToken='))
      ?.split('=')[1];

    // 토큰이 존재하면 Authorization 헤더에 추가
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
