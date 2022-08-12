import { shadeColor } from '@app/utils/utils';
import { graphic } from 'echarts';
import { ITheme } from '../types';

const chartColors = {
  chartTooltipLabel: '#6a7985',
  chartColor1: '#7568f6',
  chartColor1Tint: '#7568f6', // update
  chartColor2: '#dc88f5',
  chartColor2Tint: '#dc88f5', // update
  chartColor3: '#62d7c6',
  chartColor3Tint: '#62d7c6', // update
  chartColor4: '#306955',
  chartColor4Tint: '#306955', // update
  chartColor5: '#ff3d71',
  chartColor5Tint: '#ff3d71', // update
  chartPrimaryGradient: new graphic.LinearGradient(0, 0, 0, 1, [
    {
      offset: 0,
      color: 'rgba(0, 110, 211, 0.95)',
    },
    {
      offset: 1,
      color: 'rgba(193, 225, 255, 0.2)',
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
};

export const darkColorsTheme: ITheme = {
  primary: '#7568f6',
  primaryGradient: 'linear-gradient(261.31deg, #006CCF -29.57%, #00509A 121.11%)',
  light: '#696969',
  secondary: '#dc88f5',
  error: '#ff3d71',
  warning: '#ffaa00',
  success: '#62d7c6',
  angularGradient:
    'conic-gradient(from -35.18deg at 50% 50%, #006CCF -154.36deg, #FF5252 24.13deg, #FFB155 118.76deg, #006CCF 205.64deg, #FF5252 384.13deg)',
  background: '#2D2C3E',
  secondaryBackground: '#1c2137',
  secondaryBackgroundSelected: shadeColor('#1c2137', -5),
  spinnerBase: '#7568f6',
  border: '#ffffff',
  textMain: '#ffffff',
  textLight: '#9A9B9F',
  textSuperLight: '#444',
  textSecondary: '#ffffff',
  textDark: '#404040',
  shadow: 'rgba(0, 0, 0, 0.07)',
  boxShadow: '0 2px 8px 0 rgba(255, 255, 255, 0.07)',
  boxShadowHover: '0 4px 16px 0 rgba(255, 255, 255, 0.2)',
  dashboardMapBackground: 'linear-gradient(315deg, #0cbaba 0%, #380036 74%)',
  dashboardMapDots: '#FFFFFF',
  dashboardMapDotsHover: '#7568f6',
  dashboardMapMarkerBorder: '#7568f6',
  dashboardMapControl: '#FFFFFF',
  dashboardMapControlBackground: '#7568f6',
  dashboardMapControlDisabledBackground: '#b3cbe1',
  notificationSuccess: '#EFFFF4',
  notificationPrimary: '#D7EBFF',
  notificationWarning: '#FFF4E7',
  notificationError: '#FFE2E2',
  ...chartColors,
};
