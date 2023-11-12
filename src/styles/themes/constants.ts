import type { FontWeights, NamedColors, NamedIndexes, RelativeSizes } from './types';

export const BORDER_RADIUS = '7px';

export const BASE_COLORS = {
  white: '#ffffff',
  black: '#000000',
  green: '#008000',
  orange: '#ffb155',
  gray: '#808080',
  lightgray: '#c5d3e0',
  violet: '#ee82ee',
  lightgreen: '#89dca0',
  pink: '#ffc0cb',
  blue: '#0000ff',
  skyblue: '#35a0dc',
  red: '#ff5252',
} as const satisfies Partial<NamedColors>;

export const LAYOUT = {
  mobile: {
    headerHeight: '4.25rem',
  },
  desktop: {
    headerHeight: '5.625rem',
  },
} as const;

export const FONT_FAMILY = {
  main: 'Montserrat',
  secondary: 'Lato',
} as const satisfies Partial<NamedIndexes>;

export const FONT_SIZE = {
  xxs: '0.75rem',
  xs: '0.875rem',
  md: '1rem',
  lg: '1.125rem',
  xl: '1.25rem',
  xxl: '1.5rem',
  xxxl: '1.625rem',
  xxxxl: '2rem',
} as const satisfies Partial<RelativeSizes>;

export const FONT_WEIGHT = {
  thin: 100,
  extraLight: 200,
  light: 300,
  regular: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  extraBold: 800,
  black: 900,
} as const satisfies FontWeights;

export const HEIGHTS = {
  xxs: '1.5rem',
  xs: '2rem',
  sm: '2.5rem',
  md: '3.125rem',
  lg: '4rem',
} as const satisfies Partial<RelativeSizes>;

export const BREAKPOINTS = {
  xs: 360,
  sm: 568,
  md: 768,
  lg: 992,
  xl: 1280,
  xxl: 1920,
} as const satisfies Partial<RelativeSizes>;

export const MARGINS = {
  xs: '0.5rem',
  sm: '0.625rem',
  md: '1rem',
  lg: '1.25rem',
  xl: '1.875rem',
  xxl: '2rem',
  xxxl: '2.5rem',
} as const satisfies Partial<RelativeSizes>;

export const PADDINGS = {
  xxs: '0.75rem',
  xs: '0.9375rem',
  sm: '1rem',
  md: '1.25rem',
  lg: '1.5rem',
  xl: '2.25rem',
  xxl: '2.5rem',
} as const satisfies Partial<RelativeSizes>;
