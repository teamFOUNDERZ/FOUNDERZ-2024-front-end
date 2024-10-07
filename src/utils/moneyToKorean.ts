const units = ['', '십', '백', '천'];
const bigUnits = ['', '만', '억', '조', '경'];

export const moneyToKorean = (num: number) => {
  if (num === 0) return '영';

  let numStr = String(num);
  let result = '';
  let bigUnitIndex = 0;

  while (numStr.length > 0) {
    let part = numStr.slice(-4); // 네 자리씩 끊어서 처리
    numStr = numStr.slice(0, -4);

    let partResult = '';
    for (let i = 0; i < part.length; i++) {
      const digit = parseInt(part[part.length - 1 - i]);
      if (digit > 0) {
        partResult = `${digit === 1 && i > 0 ? '' : digit}${
          units[i]
        }${partResult}`;
      }
    }

    if (partResult) {
      result = `${partResult}${bigUnits[bigUnitIndex]}${result}`;
    }
    bigUnitIndex++;
  }

  return result;
};
