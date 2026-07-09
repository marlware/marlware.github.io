import localFont from 'next/font/local';

export const switzerMedium = localFont({
  src: '../public/fonts/switzer/Switzer-Medium.woff',
  weight: '500',
  variable: '--font-switzer-medium',
});

export const switzerLight = localFont({
  src: '../public/fonts/switzer/Switzer-Light.woff',
  weight: '300',
  variable: '--font-switzer-light',
});
