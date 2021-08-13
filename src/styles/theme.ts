import * as echarts from 'echarts';

export const colors = {
  primary: '#0059AB',
  primaryLight: '#ecfdff',
  primaryAccent: '#35A0DC',
  primaryGradient: 'linear-gradient(257.25deg, rgba(0, 108, 207, 0.7) -19.13%, rgba(0, 80, 154, 0.7) 106.53%)',
  primaryAlpha: 'rgba(226, 241, 255, 0.3)',
  secondary: '#fff',
  basic: '#dddddd',
  basicLight: '#f7f7f7',
  basicDark: '#000',
  success: '#57D682',
  error: '#FF5252',
  accent: '#FFB155',
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
  chartsPrimaryLightGradient: new echarts.graphic.LinearGradient(0, 0, 0, 0.935, [
    {
      offset: 0,
      color: '#4092de',
    },
    {
      offset: 1,
      color: '#c1e1ff',
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
  chartsSecondaryLightGradient: new echarts.graphic.LinearGradient(0, 0, 0.962, 1, [
    {
      offset: 1,
      color: '#ffa9a9',
    },
    {
      offset: 0,
      color: '#ffffff',
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
  border: {
    radius: '7px',
  },
  breakpoints,
  media,
  desktopLayout,
  mobileLayout,
};

export default theme;
