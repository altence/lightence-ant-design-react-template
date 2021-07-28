import * as echarts from 'echarts';

export const colors = {
  primary: '#0059AB;',
  secondary: '#fffffff',
  basic: '#dddddd',
  additionally: '#f7f7f7',
  primaryGradient: new echarts.graphic.LinearGradient(0, 0, 0, 1.1984, [
    {
      offset: 0,
      color: '#0059AB',
    },
    {
      offset: 1,
      color: '#79BCFF',
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
