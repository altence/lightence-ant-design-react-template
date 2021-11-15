import theme from './theme';

const darkColors = {
  main: {
    primary: '#000000',
    primaryShade: '#0661B5',
    primaryGradient: 'linear-gradient(261.31deg, #006CCF -29.57%, #00509A 121.11%)',
    secondary: '#383838',
    error: '#383838',
    warning: '#383838',
    success: '#383838',
    angularGradient:
      'conic-gradient(from -35.18deg at 50% 50%, #006CCF -154.36deg, #FF5252 24.13deg, #FFB155 118.76deg, #006CCF 205.64deg, #FF5252 384.13deg)',
    mainBackground: '#000000',
    secondaryBackground: '#F4F4F4',
  },
  text: {
    main: '#404040',
    light: '#9A9B9F',
    superLight: '#BEC0C6',
    secondary: '#000000',
  },
  border: {
    main: '#bec0c6',
  },
  mapGradient: 'linear-gradient(to right, rgba(64, 224, 208, 0.3), rgba(255, 140, 0, 0.3), rgba(255, 0, 128, 0.3))',
};

export const darkTheme = {
  ...theme,
  colors: darkColors,
};
