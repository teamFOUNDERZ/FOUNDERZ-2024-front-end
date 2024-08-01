import { instance } from './interceptor';

export const messageSend = async (phone: string) => {
  return await instance({
    method: 'POST',
    url: '/auth/message',
    data: {
      phone_number: phone,
    },
  });
};

export const messageVerify = async (phone: string, verifyNumber: string) => {
  return await instance({
    method: 'POST',
    url: '/auth/verifySms',
    data: {
      phone_number: phone,
      random_number: verifyNumber,
    },
  }).then((res) => res.data);
};
