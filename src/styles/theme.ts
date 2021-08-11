import * as echarts from 'echarts';

export const colors = {
  primary: '#0059AB',
  primaryLight: '#ecfdff',
  primaryDark: '#0059AB',
  primaryGradient: 'linear-gradient(180deg, #0059AB 0%, #EEF5FC 119.84%)',
  secondary: '#fff',
  basic: '#dddddd',
  basicLight: '#f7f7f7',
  basicDark: '#000',
  success: '#57D682',
  error: '#FF5252',
  accentDark: '#FFA41C',
  chartsPrimaryGradient: new echarts.graphic.LinearGradient(0, 0, 0, 2, [
    {
      offset: 0,
      color: '#0059AB',
    },
    {
      offset: 1,
      color: '#EEF5FC',
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
