import { instance } from './interceptor';

export const login = async (id: string, password: string) => {
  return await instance({
    method: 'POST',
    url: '/api/auth/login',
    data: { identifier: id, password: password },
  }).then((res) => res.data);
};

// 인터셉터로 요청 헤더에 토큰 자동 추가
instance.interceptors.request.use(
  (config) => {
    // 쿠키에서 토큰 읽기
    const token = document.cookie
      .split('; ')
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