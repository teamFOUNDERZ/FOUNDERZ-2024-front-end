import { instance } from './interceptor';

export const messageSend = async (phone: string) => {
  return await instance({
    method: 'GET',
    url: `/api/auth/phone-number/validation?phone-number=${phone}`,
  });
};

// export const messageVerify = async (phone: string, verifyNumber: string) => {
//   return await instance({
//     method: 'GET',
//     url: `/api/auth/phone-number/validation?phone-number=${phone}&random-number=${verifyNumber}`,
//   }).then((res) => res.data);
// };
