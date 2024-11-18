import { instance } from './interceptor';

type PhoneValidationResponse = {
  success: boolean;
  message?: string;
};

export const phoneValidation = async (phoneNumber: string): Promise<PhoneValidationResponse> => {
  const response = await instance<PhoneValidationResponse>({
    method: 'GET',
    url: '/api/auth/send',
    params: {
      'phone-number': phoneNumber,
    },
  });

  return response.data;
};

export const phoneValidationget = async (phoneNumber: string, randomNum: string): Promise<PhoneValidationResponse> => {
  const response = await instance<PhoneValidationResponse>({
    method: 'GET',
    url: '/api/auth/send',
    params: {
      'phone-number': phoneNumber,
      'random-num': randomNum,
    },
  });

  return response.data;
};
