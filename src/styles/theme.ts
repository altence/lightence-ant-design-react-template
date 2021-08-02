import * as echarts from 'echarts';

export const colors = {
  primary: '#088a98',
  secondary: '#fff',
  basic: '#dddddd',
  additionally: '#f7f7f7',
  text: '#404040',
  chartLabel: '#c7c7c7',
  success: '#57D682',
  fail: '#FF5252',
  star: '#FFC24B',
  primaryGradient: new echarts.graphic.LinearGradient(0, 0, 0, 1.5, [
    {
      offset: 0,
      color: '#088a98',
    },
    {
      offset: 1,
      color: '#F1FEFF',
    },
  ]),
  secondaryGradient: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
    {
      offset: 1,
      color: '#FF6291',
    },
    {
      offset: 0,
      color: '#FFDEE8',
    },
  ]),
  additionallyGradient: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
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
