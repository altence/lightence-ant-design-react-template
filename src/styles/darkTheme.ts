import theme from './theme';
import { graphic } from 'echarts';

const darkColors = {
  main: {
    primary: '#7568F6',
    primaryGradient: 'linear-gradient(261.31deg, #006CCF -29.57%, #00509A 121.11%)',
    light: '#696969',
    secondary: '#35A0DC',
    error: '#FF5252',
    warning: '#FFB155',
    success: '#57D682',
    angularGradient:
      'conic-gradient(from -35.18deg at 50% 50%, #006CCF -154.36deg, #FF5252 24.13deg, #FFB155 118.76deg, #006CCF 205.64deg, #FF5252 384.13deg)',
    mainBackground: '#2D2C3E',
    secondaryBackground: '#1c2137',
    chartPrimaryGradient: new graphic.LinearGradient(0, 0, 0, 1, [
      {
        offset: 0,
        color: 'rgba(0, 110, 211, 0.75)',
      },
      {
        offset: 1,
        color: 'rgba(193, 225, 255, 0)',
      },
    ]),
    chartSecondaryGradient: new graphic.LinearGradient(0, 0, 0, 1, [
      {
        offset: 0,
        color: 'rgba(255, 82, 82, 0.5)',
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

const boxShadow = {
  main: '0 4px 8px 0 rgba(255, 255, 255, 0.07)',
  hover: '0 8px 16px 0 rgba(255, 255, 255, 0.2)',
};

export const darkTheme = {
  ...theme,
  colors: darkColors,
  boxShadow,
};
