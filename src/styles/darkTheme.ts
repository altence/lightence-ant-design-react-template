import theme from './theme';
import { graphic } from 'echarts';

const darkColors = {
  main: {
    primary: '#000000',
    primaryLight: '#b3cbe1',
    primaryShade: '#0661B5',
    primaryGradient: 'linear-gradient(261.31deg, #006CCF -29.57%, #00509A 121.11%)',
    light: '#000000',
    secondary: '#383838',
    error: '#383838',
    warning: '#383838',
    success: '#383838',
    angularGradient:
      'conic-gradient(from -35.18deg at 50% 50%, #006CCF -154.36deg, #FF5252 24.13deg, #FFB155 118.76deg, #006CCF 205.64deg, #FF5252 384.13deg)',
    mainBackground: '#000000',
    secondaryBackground: '#F4F4F4',
    lightBackground: '#F3F3F3',
    chartPrimaryGradient: new graphic.LinearGradient(0, 0, 0, 1, [
      {
        offset: 0,
        color: 'rgba(0, 0, 0, 0.95)',
      },
      {
        offset: 1,
        color: 'rgba(193, 225, 255, 0.2)',
      },
    ]),
    chartSecondaryGradient: new graphic.LinearGradient(0, 0, 0, 1, [
      {
        offset: 0,
        color: 'rgba(0, 0, 0, 0.5)',
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
    secondary: '#000000',
  },
  border: {
    main: '#bec0c6',
  },
  dashboardMap: {
    background:
      'radial-gradient(at 82% 11%, hsla(213, 100%, 73%, 1) 0, transparent 47%), ' +
      'radial-gradient(at 24% 85%, hsla(4, 100%, 75%, 1) 0, transparent 55%), ' +
      'radial-gradient(at 32% 28%, hsla(37, 100%, 77%, 1) 0, transparent 56%),' +
      'radial-gradient(at 84% 86%, hsla(288, 50%, 69%, 1) 0, transparent 66%)',
    dotsColor: '#FFFFFF',
    dotsHoveredColor: '#01509A',
    markerBorderColor: '#01509A',
    controlColor: '#FFFFFF',
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

export const darkTheme = {
  ...theme,
  colors: darkColors,
};
