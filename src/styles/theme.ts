// import * as echarts from 'echarts';

// const primary = {
//   base: '#0059AB',
//   light: '#ecfdff',
//   accent: '#35A0DC',
// };

// const primaryDark = {
//   base: '#000',
//   light: '#808080',
//   accent: '#E75480',
// };

// export const colors = {
//   primary: primary.base,
//   primaryLight: primary.light,
//   primaryAccent: primary.accent,
//   primaryGradient: 'linear-gradient(257.25deg, rgba(0, 108, 207, 0.7) -19.13%, rgba(0, 80, 154, 0.7) 106.53%)',
//   primaryAlpha: 'rgba(226, 241, 255, 0.3)',
//   secondary: '#fff',
//   secondaryAlpha: 'rgba(255, 255, 255, 0.7)',
//   basic: '#dddddd',
//   basicLight: '#f7f7f7',
//   basicDark: '#000',
//   basicMurky: '#898989',
//   success: '#57D682',
//   additional: '#FF5252',
//   additional2: '#FFB155',
//   errorLight: '#FF9999',
//   accent: '#FFB155',
//   angularGradient:
//     'conic-gradient(from -35.18deg at 50% 50%, #006CCF -154.36deg, #FF5252 24.13deg, #FFB155 118.76deg, #006CCF 205.64deg, #FF5252 384.13deg)',
//   chartsPrimaryGradient: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
//     {
//       offset: 0,
//       color: primary.base,
//     },
//     {
//       offset: 1,
//       color: '#EEF5FC',
//     },
//   ]),
//   chartsPrimaryLightGradient: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
//     {
//       offset: 0,
//       color: '#4092de',
//     },
//     {
//       offset: 1,
//       color: '#c1e1ff',
//     },
//   ]),
//   chartsErrorGradient: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
//     {
//       offset: 1,
//       color: '#ffa9a9',
//     },
//     {
//       offset: 0,
//       color: '#ffffff',
//     },
//   ]),
//   chartsAccentGradient: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
//     {
//       offset: 0,
//       color: '#FFA215',
//     },
//     {
//       offset: 1,
//       color: '#FFD595',
//     },
//   ]),
// };

// export const darkColors = {
//   primary: primaryDark.base,
//   primaryLight: primaryDark.light,
//   primaryAccent: primaryDark.accent,
//   primaryGradient: 'linear-gradient(257.25deg, rgba(0, 108, 207, 0.7) -19.13%, rgba(0, 80, 154, 0.7) 106.53%)',
//   primaryAlpha: 'rgba(226, 241, 255, 0.3)',
//   secondary: '#fff',
//   secondaryAlpha: 'rgba(255, 255, 255, 0.7)',
//   basic: '#dddddd',
//   basicLight: '#f7f7f7',
//   basicMurky: '#898989',
//   basicDark: '#000',
//   success: '#57D682',
//   error: '#FF5252',
//   errorLight: '#FF9999',
//   accent: '#FFB155',
//   chartsPrimaryGradient: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
//     {
//       offset: 0,
//       color: primaryDark.base,
//     },
//     {
//       offset: 1,
//       color: '#EEF5FC',
//     },
//   ]),
//   chartsPrimaryLightGradient: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
//     {
//       offset: 0,
//       color: '#4092de',
//     },
//     {
//       offset: 1,
//       color: '#c1e1ff',
//     },
//   ]),
//   chartsErrorGradient: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
//     {
//       offset: 1,
//       color: '#ffa9a9',
//     },
//     {
//       offset: 0,
//       color: '#ffffff',
//     },
//   ]),
//   chartsAccentGradient: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
//     {
//       offset: 0,
//       color: '#FFA215',
//     },
//     {
//       offset: 1,
//       color: '#FFD595',
//     },
//   ]),
// };

import { DefaultTheme } from 'styled-components';

export const mobileLayout = {
  paddingVertical: '0.75rem',
  paddingHorizontal: '1rem',
};

export const desktopLayout = {
  paddingVertical: '1.25rem',
  paddingHorizontal: '1.5rem',
};

export const breakpoints = {
  xs: 360,
  md: 768,
  xl: 1280,
  xxl: 1920,
};

const getMedia = (breakpoint: number) => `(min-width: ${breakpoint}px)`;

export const media = {
  xs: getMedia(breakpoints.xs),
  md: getMedia(breakpoints.md),
  xl: getMedia(breakpoints.xl),
  xxl: getMedia(breakpoints.xxl),
};

const commonColors = {
  white: '#ffffff',
  black: '#000000',
  green: '#008000',
  orange: '#FFA500',
  gray: '#808080',
  violet: '#EE82EE',
  lightgreen: '#90EE90',
  pink: '#FFC0CB',
  blue: '#0000FF',
  skyblue: '#87CEEB',
};

const colors = {
  main: {
    primary: '#01509A',
    primaryGradient: 'linear-gradient(261.31deg, #006CCF -29.57%, #00509A 121.11%)',
    secondary: '#0085FF',
    error: '#FF5252',
    warning: '#FFB155',
    success: '#57D682',
    angularGradient:
      'conic-gradient(from -35.18deg at 50% 50%, #006CCF -154.36deg, #FF5252 24.13deg, #FFB155 118.76deg, #006CCF 205.64deg, #FF5252 384.13deg)',
    mainBackground: commonColors.white,
    secondaryBackground: '#F4F4F4',
  },
  text: {
    main: '#404040',
    light: '#9A9B9F',
    superLight: '#BEC0C6',
    secondary: commonColors.white,
  },
  border: {
    main: '#bec0c6',
  },
  mapGradient: 'linear-gradient(to right, rgba(64, 224, 208, 0.3), rgba(255, 140, 0, 0.3), rgba(255, 0, 128, 0.3))',
};

const theme: DefaultTheme = {
  commonColors,
  colors,
  border: {
    radius: '7px',
  },
  breakpoints,
  media,
  mobileLayout,
  desktopLayout,
};

// export const darkTheme = {
//   ...theme,
//   colors: darkColors,
// };

export default theme;
