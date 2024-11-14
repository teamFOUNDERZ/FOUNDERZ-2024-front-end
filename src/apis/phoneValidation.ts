import { instance } from './interceptor';

type PhoneValidationResponse = {
  success: boolean;
  message?: string;
};

export const phoneValidation = async (phoneNumber: string): Promise<PhoneValidationResponse> => {
  const response = await instance<PhoneValidationResponse>({
    method: 'GET',
    url: '/api/auth/phone-number/validation',
    params: {
      'phone-number': phoneNumber,
    },
  });

  return response.data;
};
