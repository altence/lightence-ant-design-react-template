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
    //TODO replace
    primaryLight: '#b3cbe1',
    primaryShade: '#0661B5',
    primaryGradient: 'linear-gradient(261.31deg, #006CCF -29.57%, #00509A 121.11%)',
    light: '#C5D3E0',
    secondary: '#0085FF',
    error: '#FF5252',
    warning: '#FFB155',
    success: '#57D682',
    angularGradient:
      'conic-gradient(from -35.18deg at 50% 50%, #006CCF -154.36deg, #FF5252 24.13deg, #FFB155 118.76deg, #006CCF 205.64deg, #FF5252 384.13deg)',
    mainBackground: commonColors.white,
    secondaryBackground: '#F8FBFF',
    chartPrimaryGradient: new graphic.LinearGradient(0, 0, 0, 1, [
      {
        offset: 0,
        color: 'rgba(0, 110, 211, 0.95)',
      },
      {
        offset: 1,
        color: 'rgba(193, 225, 255, 0.2)',
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
    chartAdditionalGradient: new graphic.LinearGradient(0, 0, 0, 1, [
      {
        offset: 0,
        color: 'rgba(11, 156, 49, 0.9)',
      },
      {
        offset: 1,
        color: 'rgba(255, 255, 255, 0)',
      },
    ]),
  },
  text: {
    main: '#404040',
    light: '#9A9B9F',
    superLight: '#BEC0C6',
    secondary: commonColors.white,
  },
  border: {
    main: '#cce1f4',
  },
  dashboardMap: {
    background:
      'radial-gradient(at 82% 11%, hsla(213, 100%, 73%, 1) 0, transparent 47%), ' +
      'radial-gradient(at 24% 85%, hsla(4, 100%, 75%, 1) 0, transparent 55%), ' +
      'radial-gradient(at 32% 28%, hsla(37, 100%, 77%, 1) 0, transparent 56%),' +
      'radial-gradient(at 84% 86%, hsla(288, 50%, 69%, 1) 0, transparent 66%)',
    dotsColor: commonColors.white,
    //TODO use primary
    dotsHoveredColor: '#b3cbe1',
    markerBorderColor: '#01509A',
    controlColor: commonColors.white,
    controlBackgroundColor: '#01509A',
    controlDisabledBackgroundColor: '#b3cbe1',
  },
  charts: {
    tooltipLabel: '#6A7985',
    color1: '#01509A',
    color1Tint: '#2983D8',
    color2: '#35A0DC',
    color2Tint: '#67C5FA',
    color3: '#FFDA92',
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
};

const boxShadow = {
  main: '0 4px 8px 0 rgba(0, 0, 0, 0.07)',
  hover: '0 8px 16px 0 rgba(0, 0, 0, 0.2)',
};

const theme: DefaultTheme = {
  commonColors,
  colors,
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

export default theme;

export const getChartColors = (): string[] => [
  theme.colors.charts.color1,
  theme.colors.charts.color2,
  theme.colors.charts.color3,
  theme.colors.charts.color4,
  theme.colors.charts.color5,
];
