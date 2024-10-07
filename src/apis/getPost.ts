import { instance } from './interceptor';

export type PostListType = {
  business_id: number;
  business_name: string;
  one_liner: string;
  total_investment: number;
  tags: { id: number; tagName: string }[];
};

export const getPost = async () => {
  return await instance<PostListType[]>({
    method: 'GET',
    url: '/business/all',
  }).then((res) => res.data);
};
