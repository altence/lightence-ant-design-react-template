import lightTheme from '../light/lightTheme';
import { graphic } from 'echarts';

const darkColors = {
  main: {
    primary: '#339CFD',
    primaryGradient: 'linear-gradient(211.49deg, #dc88f5 15.89%, #339CFD 48.97%)',
    light: '#696969',
    secondary: '#0072DD',
    error: '#FF5252',
    warning: '#FFB765',
    success: '#57D682',
    mainBackground: '#25284B',
    secondaryBackground: '#1c2137',
    additionalBackground: '#1D203E',
    timelineBackground: '#f5f5f5',
    spinnerBase: '#339CFD',
    chartPrimaryGradient: new graphic.LinearGradient(0, 0, 0, 1, [
      {
        offset: 0,
        color: 'rgba(51, 156, 253, 0.35)',
      },
      {
        offset: 1,
        color: 'rgba(51, 156, 253, 0)',
      },
    ]),
    chartSecondaryGradient: new graphic.LinearGradient(0, 0, 0, 1, [
      {
        offset: 0,
        color: 'rgba(255, 82, 82, 0.35)',
      },
      {
        offset: 1,
        color: 'rgba(255, 82, 82, 0)',
      },
    ]),
    chartSecondaryGradientSpecular: new graphic.LinearGradient(0, 0, 0, 1, [
      {
        offset: 0,
        color: 'rgba(255, 255, 255, 0)',
      },
      {
        offset: 1,
        color: 'rgba(255, 82, 82, 0.5)',
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
    siderPrimary: '#339CFD',
    siderSecondary: '#797C9A',
  },
  border: {
    main: '#ffffff',
    nft: '#797C9A',
  },
  sider: {
    background: '#121430',
  },
  dashboardMap: {
    background: '#25284b',
    circleColor: '#ACAEC1',
    controlDisabledBackgroundColor: '#7e7e7e',
  },
  charts: {
    tooltipLabel: '#6a7985',
    color1: '#339CFD',
    color1Tint: '#339CFD', // update
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
  scroll: {
    main: '#797C9A',
  },
};

const boxShadow = {
  main: 'none',
  hover: 'none',
  nftMain: '0px 16px 24px rgba(0, 0, 0, 0.06), 0px 2px 6px rgba(0, 0, 0, 0.04), 0px 0px 1px rgba(0, 0, 0, 0.04)',
  nftSecondary: '0px 10px 20px rgba(0, 0, 0, 0.04), 0px 2px 6px rgba(0, 0, 0, 0.04), 0px 0px 1px rgba(0, 0, 0, 0.04)',
};

export const darkTheme = {
  ...lightTheme,
  name: 'dark',
  colors: darkColors,
  boxShadow,
};
