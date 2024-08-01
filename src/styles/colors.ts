export const Colors = {
  Black: '#000000',
  White: '#FFFFFF',
  Gray900: '#111111',
  Gray800: '#222222',
  Gray700: '#444444',
  Gray600: '#666666',
  Gray500: '#888888',
  Gray400: '#AAAAAA',
  Gray300: '#CCCCCC',
  Gray200: '#D9D9D9',
  Gray100: '#EEEEEE',
  Gray50: '#F6F6F6',
  Blue900: '#001133',
  Blue800: '#011C52',
  Blue700: '#052970',
  Blue600: '#0B41AD',
  Blue500: '#1860F0',
  Blue400: '#3573F0',
  Blue300: '#6496FA',
  Blue200: '#8CB1FA',
  Blue100: '#BED2FA',
  Blue50: '#EBF0FA',
  CriticalMain: '#DB2C36',
  CriticalBackground: '#FFE6D8',
} as const;

export type colorsKeyOfType = keyof typeof Colors;
