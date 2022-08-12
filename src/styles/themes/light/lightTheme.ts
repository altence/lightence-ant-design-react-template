import { shadeColor } from '@app/utils/utils';
import { graphic } from 'echarts';
import { BASE_COLORS } from '../constants';
import { ITheme } from '../types';

const chartColors = {
  chartTooltipLabel: '#6A7985',
  chartColor1: '#01509A',
  chartColor1Tint: '#2983D8',
  chartColor2: '#35A0DC',
  chartColor2Tint: '#67C5FA',
  chartColor3: '#FFDA92',
  chartColor3Tint: '#FFA800',
  chartColor4: '#31A652',
  chartColor4Tint: '#89DCA0',
  chartColor5: '#FF5252',
  chartColor5Tint: '#FFC1C1',
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

export const lightColorsTheme: ITheme = {
  primary: '#01509A',
  primaryGradient: 'linear-gradient(261.31deg, #006CCF -29.57%, #00509A 121.11%)',
  light: '#C5D3E0',
  secondary: '#0475dd',
  error: '#ed0505',
  warning: '#FFB155',
  success: '#076626',
  angularGradient:
    'conic-gradient(from -35.18deg at 50% 50%, #006CCF -154.36deg, #FF5252 24.13deg, #FFB155 118.76deg, #006CCF 205.64deg, #FF5252 384.13deg)',
  background: BASE_COLORS.white,
  secondaryBackground: '#F8FBFF',
  secondaryBackgroundSelected: shadeColor('#F8FBFF', -5),
  spinnerBase: '#f42f25',
  border: '#cce1f4',
  textMain: '#404040',
  textLight: '#9A9B9F',
  textSuperLight: '#BEC0C6',
  textSecondary: BASE_COLORS.white,
  textDark: '#404040',
  shadow: 'rgba(0, 0, 0, 0.07)',
  boxShadow: '0 2px 8px 0 rgba(0, 0, 0, 0.07)',
  boxShadowHover: '0 4px 16px 0 rgba(0, 0, 0, 0.2)',
  dashboardMapBackground:
    'radial-gradient(at 82% 11%, hsla(213, 100%, 73%, 1) 0, transparent 47%), ' +
    'radial-gradient(at 24% 85%, hsla(4, 100%, 75%, 1) 0, transparent 55%), ' +
    'radial-gradient(at 32% 28%, hsla(37, 100%, 77%, 1) 0, transparent 56%),' +
    'radial-gradient(at 84% 86%, hsla(288, 50%, 69%, 1) 0, transparent 66%)',
  dashboardMapDots: BASE_COLORS.white,
  //TODO use primary
  dashboardMapDotsHover: '#b3cbe1',
  dashboardMapMarkerBorder: '#01509A',
  dashboardMapControl: BASE_COLORS.white,
  dashboardMapControlBackground: '#01509A',
  dashboardMapControlDisabledBackground: '#b3cbe1',
  notificationSuccess: '#EFFFF4',
  notificationPrimary: '#D7EBFF',
  notificationWarning: '#FFF4E7',
  notificationError: '#FFE2E2',
  ...chartColors,
};
