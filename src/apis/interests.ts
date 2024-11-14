import { instance } from './interceptor';

export const addInterest = async (tag_id: string) => {
  const response = await instance({
    method: 'POST',
    url: '/api/users/interests',
    data: { tag_id: tag_id },
  });
  return response;
};

export const removeInterest = async (tagId: string) => {
  const response = await instance({
    method: 'DELETE',
    url: `/api/users/interests/${tagId}`,
  });
  return response;
};

export const getInterest = async () => {
  return await instance({
    method: 'GET',
    url: `/api/users/interests`,
  });
}
