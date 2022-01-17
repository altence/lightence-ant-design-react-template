import theme from './theme';
import { graphic } from 'echarts';

const darkColors = {
  main: {
    primary: '#7568f6',
    primaryGradient: 'linear-gradient(261.31deg, #006CCF -29.57%, #00509A 121.11%)',
    light: '#696969',
    secondary: '#35A0DC',
    error: '#ff3d71',
    warning: '#ffaa00',
    success: '#62d7c6',
    angularGradient:
      'conic-gradient(from -35.18deg at 50% 50%, #006CCF -154.36deg, #FF5252 24.13deg, #FFB155 118.76deg, #006CCF 205.64deg, #FF5252 384.13deg)',
    mainBackground: '#2D2C3E',
    secondaryBackground: '#1c2137',
    chartPrimaryGradient: new graphic.LinearGradient(0, 0, 0, 1, [
      {
        offset: 0,
        color: '#7568f6',
      },
      {
        offset: 1,
        color: 'rgba(193, 225, 255, 0)',
      },
    ]),
    chartSecondaryGradient: new graphic.LinearGradient(0, 0, 0, 1, [
      {
        offset: 0,
        color: '#a42218',
      },
      {
        offset: 1,
        color: 'rgba(255, 255, 255, 0)',
      },
    ]),
    chartAdditionalGradient: new graphic.LinearGradient(0, 0, 0, 1, [
      {
        offset: 0,
        color: '#306955',
      },
      {
        offset: 1,
        color: 'rgba(255, 255, 255, 0)',
      },
    ]),
  },
  text: {
    main: '#ffffff',
    light: '#9A9B9F',
    superLight: '#444',
    secondary: '#ffffff',
  },
  border: {
    main: '#ffffff',
  },
  dashboardMap: {
    background: 'linear-gradient(315deg, #0cbaba 0%, #380036 74%)',
    dotsColor: '#FFFFFF',
    dotsHoveredColor: '#01509A',
    markerBorderColor: '#01509A',
    controlColor: '#FFFFFF',
    controlBackgroundColor: '#01509A',
    controlDisabledBackgroundColor: '#b3cbe1',
  },
  charts: {
    tooltipLabel: '#6a7985',
    color1: '#7568f6',
    color1Tint: '#7568f6', // update
    color2: '#dc88f5',
    color2Tint: '#dc88f5', // update
    color3: '#62d7c6',
    color3Tint: '#62d7c6', // update
    color4: '#306955',
    color4Tint: '#306955', // update
    color5: '#ff3d71',
    color5Tint: '#ff3d71', // update
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
  main: '0 4px 8px 0 rgba(255, 255, 255, 0.07)',
  hover: '0 8px 16px 0 rgba(255, 255, 255, 0.2)',
};

export const darkTheme = {
  ...theme,
  colors: darkColors,
  boxShadow,
};
