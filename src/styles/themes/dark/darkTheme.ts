import { shadeColor } from '@app/utils/utils';
import { graphic } from 'echarts';
import { BASE_COLORS } from '../constants';
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
};

export const darkColorsTheme: ITheme = {
  primary: '#7568f6',
  primary1: '#7568f6',
  primaryGradient: 'linear-gradient(261.31deg, #006CCF -29.57%, #00509A 121.11%)',
  light: '#696969',
  secondary: '#dc88f5',
  error: '#ff3d71',
  warning: '#ffaa00',
  success: '#00d68f',
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
  heading: BASE_COLORS.white,
  borderBase: '#a9a9a9',
  disable: '#7e7e7e',
  disabledBg: '#1c2137',
  layoutBodyBg: '#1c2137',
  layoutHeaderBg: 'linear-gradient(0deg, #2d2b47, #2d2b47)',
  layoutSiderBg: 'linear-gradient(197.79deg, #2c2c36 -7.21%, #312f43 34.7%)',
  inputPlaceholder: 'rgba(255, 255, 255, 0.5)',
  itemHoverBg: '#1c2137',
  backgroundColorBase: '#1c2137',
  avatarBg: '#1c2137',
  alertTextColor: '#000',
  breadcrumb: '#a9a9a9',
  icon: '#a9a9a9',
  iconHover: '#ffffff',
  ...chartColors,
};

export const antDarkColorsTheme = {
  successBg: '#e6fff2',
  successBorder: '#79fcc4',
};
