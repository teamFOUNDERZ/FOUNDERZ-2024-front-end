import { instance } from "./interceptor";
import { getCookie } from "../utils/cookies";

export interface getMyInfoItem {
  account_id: string;
  name: string;
  my_money: number;
  account_type: string;
  phone_number: string;
  tags: {
    tag_id: string;
    tag_name: string;
  }[];
}

export const getMyInfo = async (): Promise<getMyInfoItem | null> => {
  try {
    const token = getCookie('authToken');

    if (!token) {
      console.error('Token is missing');
      return null;
    }

    console.log("Calling API to fetch user info...");
    
    const response = await instance<getMyInfoItem>({
      method: 'GET',
      url: '/api/users/my-info',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    // 응답 상태 코드 확인
    if (!response || !response.data) {
      console.error("API response is empty or malformed");
      return null;
    }

    console.log("Fetched user info:", response.data);

    return response.data;
  } catch (error) {
    console.error("Error in getMyInfo:", error);
    return null;
  }
};
