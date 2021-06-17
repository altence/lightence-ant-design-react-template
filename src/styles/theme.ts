export const colors = {
  primary: '#088a98',
  secondary: 'white',
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

const theme = {
  colors,
  breakpoints,
  media,
};

export default theme;
