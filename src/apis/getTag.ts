import { instance } from './interceptor';

export const getTag = async () => {
  return await instance({
    method: 'GET',
    url: `/api/tags`,
  });
};