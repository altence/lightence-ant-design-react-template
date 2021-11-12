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
  orange: '#ffb155',
  gray: '#808080',
  lightgrey: '#c5d3e0',
  violet: '#ee82ee',
  lightgreen: '#89dca0',
  pink: '#ffc0cb',
  blue: '#0000ff',
  skyblue: '#35a0dc',
  red: '#ff5252',
};

const commonFontSizes = {
  xxs: '0.75rem',
  xs: '0.875rem',
  md: '1rem',
  lg: '1.125rem',
  xl: '1.25rem',
  xxl: '1.5rem',
  xxxl: '2rem',
  xxxxl: '3rem',
};

const commonFontWeight = {
  thin: '100',
  extraLight: '200',
  light: '300',
  normal: '400',
  medium: '500',
  semibold: '600',
  bold: '700',
  extraBold: '800',
  black: '900',
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
  boxShadow: '0px 4px 40px rgba(0, 0, 0, 0.07)',
  breakpoints,
  media,
  mobileLayout,
  desktopLayout,
  commonFontSizes,
  commonFontWeight,
};

export default theme;
