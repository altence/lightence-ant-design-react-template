import { DefaultTheme } from 'styled-components';
import { graphic } from 'echarts';

export const mobileLayout = {
  paddingVertical: '0.75rem',
  paddingHorizontal: '1rem',
  headerHeight: '4.25rem',
  headerPadding: '1rem',
};

export const desktopLayout = {
  paddingVertical: '1.25rem',
  paddingHorizontal: '2.25rem',
  headerHeight: '5.625rem',
};

export const breakpoints = {
  xs: 360,
  sm: 568,
  md: 768,
  lg: 992,
  xl: 1280,
  xxl: 1920,
};

const getMedia = (breakpoint: number) => `(min-width: ${breakpoint}px)`;

export const media = {
  xs: getMedia(breakpoints.xs),
  sm: getMedia(breakpoints.sm),
  md: getMedia(breakpoints.md),
  lg: getMedia(breakpoints.lg),
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

const fonts = {
  main: 'Montserrat',
  secondary: 'Lato',
};

const commonFontSizes = {
  xxs: '0.75rem',
  xs: '0.875rem',
  md: '1rem',
  lg: '1.125rem',
  xl: '1.25rem',
  xxl: '1.5rem',
  xxxl: '1.625rem',
  xxxxl: '2rem',
};

const commonFontWeight = {
  thin: '100',
  extraLight: '200',
  light: '300',
  regular: '400',
  medium: '500',
  semibold: '600',
  bold: '700',
  extraBold: '800',
  black: '900',
};

const colors = {
  main: {
    primary: '#01509A',
    primaryGradient: 'linear-gradient(211.49deg, #006CCF 15.89%, #00509A 48.97%)',
    light: '#C5D3E0',
    secondary: '#0085FF',
    error: '#FF5252',
    warning: '#FFB155',
    success: '#30AF5B',
    mainBackground: commonColors.white,
    secondaryBackground: '#F8FBFF',
    additionalBackground: '#ffffff',
    timelineBackground: '#F8FBFF',
    spinnerBase: '#f42f25',
    chartPrimaryGradient: new graphic.LinearGradient(0, 0, 0, 1, [
      {
        offset: 0,
        color: 'rgba(0, 110, 211, 0.5)',
      },
      {
        offset: 1,
        color: 'rgba(255, 225, 255, 0)',
      },
    ]),
    chartSecondaryGradient: new graphic.LinearGradient(0, 0, 0, 1, [
      {
        offset: 0,
        color: 'rgba(255, 82, 82, 0.5)',
      },
      {
        offset: 1,
        color: 'rgba(255, 255, 255, 0)',
      },
    ]),
    chartSecondaryGradientSpecular: new graphic.LinearGradient(0, 0, 0, 1, [
      {
        offset: 0,
        color: 'rgba(255, 255, 255, 0)',
      },
      {
        offset: 1,
        color: 'rgba(255, 82, 82, 0.5)',
      },
    ]),
  },
  text: {
    main: '#404040',
    light: '#9A9B9F',
    superLight: '#BEC0C6',
    secondary: commonColors.white,
    dark: '#404040',
    nftLight: '#79819A',
    siderPrimary: '#FFB765',
    siderSecondary: '#ffffff',
  },
  border: {
    main: '#cce1f4',
    nft: '#79819A',
  },
  sider: {
    background: '#ffffff',
  },
  dashboardMap: {
    background: '#EAF5FF',
    circleColor: '#9BC2E7',
    controlDisabledBackgroundColor: '#c5d3e0',
  },
  charts: {
    tooltipLabel: '#6A7985',
    color1: '#01509A',
    color1Tint: '#2983D8',
    color2: '#35A0DC',
    color2Tint: '#67C5FA',
    color3: '#FFB155',
    color3Tint: '#FFA800',
    color4: '#31A652',
    color4Tint: '#89DCA0',
    color5: '#FF5252',
    color5Tint: '#FFC1C1',
  },
  shadow: {
    color: 'rgba(0, 0, 0, 0.07)',
  },
  notifications: {
    success: '#EFFFF4',
    primary: '#D7EBFF',
    warning: '#FFF4E7',
    error: '#FFE2E2',
  },
  scroll: {
    main: '#c5d3e0',
  },
};

const boxShadow = {
  main: '0 2px 8px 0 rgba(0, 0, 0, 0.07)',
  hover: '0 4px 16px 0 rgba(0, 0, 0, 0.2)',
  nftMain: '0px 16px 24px rgba(0, 0, 0, 0.06), 0px 2px 6px rgba(0, 0, 0, 0.04), 0px 0px 1px rgba(0, 0, 0, 0.04)',
  nftSecondary: '0px 10px 20px rgba(0, 0, 0, 0.04), 0px 2px 6px rgba(0, 0, 0, 0.04), 0px 0px 1px rgba(0, 0, 0, 0.04)',
};

const lightTheme: DefaultTheme = {
  commonColors,
  name: 'light',
  colors,
  fonts,
  border: {
    radius: '7px',
  },
  boxShadow,
  breakpoints,
  media,
  mobileLayout,
  desktopLayout,
  commonFontSizes,
  commonFontWeight,
};

export default lightTheme;
