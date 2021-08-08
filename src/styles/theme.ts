import * as echarts from 'echarts';

export const colors = {
  primary: '#088a98',
  primaryLight: '#ecfdff',
  primaryDark: '#0059AB',
  primaryGradient: 'linear-gradient(257.25deg, rgba(8, 138, 152, 0.7) -19.13%, rgba(38, 188, 204, 0.7) 106.53%)',
  secondary: '#fff',
  basic: '#dddddd',
  basicLight: '#f7f7f7',
  basicDark: '#000',
  success: '#57D682',
  fail: '#FF5252',
  accent: '#FFC24B',
  accentLight: '#FFA41C',
  chartsPrimaryGradient: new echarts.graphic.LinearGradient(0, 0, 0, 1.5, [
    {
      offset: 0,
      color: '#088a98',
    },
    {
      offset: 1,
      color: '#F1FEFF',
    },
  ]),
  chartsSecondaryGradient: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
    {
      offset: 1,
      color: '#FF6291',
    },
    {
      offset: 0,
      color: '#FFDEE8',
    },
  ]),
  chartsAdditionallyGradient: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
    {
      offset: 0,
      color: '#FFA215',
    },
    {
      offset: 1,
      color: '#FFD595',
    },
  ]),
};

export const breakpoints = {
  md: 768,
  xl: 1200,
};

const getMedia = (breakpoint: number) => `(min-width: ${breakpoint}px)`;

export const media = {
  md: getMedia(breakpoints.md),
  xl: getMedia(breakpoints.xl),
};

export const desktopLayout = {
  paddingVertical: '1.25rem',
  paddingHorizontal: '1.5rem',
  headerLineHeight: '2rem',
  headerHeight: '4.5rem',
  contentOffset: '12rem',
};

export const mobileLayout = {
  headerHeight: '3rem',
};

const theme = {
  colors,
  breakpoints,
  media,
  desktopLayout,
  mobileLayout,
};

export default theme;
