import lightTheme from '../light/lightTheme';
import { graphic } from 'echarts';

const darkColors = {
  main: {
    primary: '#4F89FF',
    primaryGradient: 'linear-gradient(211.49deg, #dc88f5 15.89%, #7568f6 48.97%)',
    light: '#696969',
    secondary: '#dc88f5',
    error: '#FF5252',
    warning: '#FFB765',
    success: '#57D682',
    angularGradient:
      'conic-gradient(from -35.18deg at 50% 50%, #006CCF -154.36deg, #FF5252 24.13deg, #FFB155 118.76deg, #006CCF 205.64deg, #FF5252 384.13deg)',
    mainBackground: '#25284B',
    secondaryBackground: '#1c2137',
    additionalBackground: '#1D203E',
    spinnerBase: '#7568f6',
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
    dark: '#404040',
    nftLight: '#797C9A',
  },
  border: {
    main: '#ffffff',
    nft: '#797C9A',
  },
  sider: {
    background: '#121430',
  },
  dashboardMap: {
    background: 'linear-gradient(315deg, #0cbaba 0%, #380036 74%)',
    dotsColor: '#FFFFFF',
    dotsHoveredColor: '#7568f6',
    markerBorderColor: '#7568f6',
    controlColor: '#FFFFFF',
    controlBackgroundColor: '#7568f6',
    controlDisabledBackgroundColor: '#b3cbe1',
  },
  charts: {
    tooltipLabel: '#6a7985',
    color1: '#7568f6',
    color1Tint: '#7568f6', // update
    color2: '#dc88f5',
    color2Tint: '#dc88f5', // update
    color3: '#FFB765',
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
  main: '0 2px 8px 0 rgba(255, 255, 255, 0.07)',
  hover: '0 4px 16px 0 rgba(255, 255, 255, 0.2)',
  nftMain: '0px 16px 24px rgba(0, 0, 0, 0.06), 0px 2px 6px rgba(0, 0, 0, 0.04), 0px 0px 1px rgba(0, 0, 0, 0.04)',
  nftSecondary: '0px 10px 20px rgba(0, 0, 0, 0.04), 0px 2px 6px rgba(0, 0, 0, 0.04), 0px 0px 1px rgba(0, 0, 0, 0.04)',
};

export const darkTheme = {
  ...lightTheme,
  colors: darkColors,
  boxShadow,
};
