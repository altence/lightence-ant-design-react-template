import { hexToRGB, shadeColor } from '@app/utils/utils';
import { graphic } from 'echarts';
import {
  BASE_COLORS,
  BORDER_RADIUS,
  BREAKPOINTS,
  FONT_FAMILY,
  FONT_SIZE,
  FONT_WEIGHT,
  HEIGHTS,
  MARGINS,
  PADDINGS,
} from '../constants';
import type { ChartColors, ColorType, ITheme, IndexedPrimaries } from '../types';

const colorTypes = {
  primary: '#01509A',
  success: '#30AF5B',
  warning: '#FFB155',
  error: '#FF5252',
} as const satisfies Record<ColorType, string>;

const indexedPrimaries = {
  primary1: '#f5f5f5',
  primary2: '#85b3cc',
  primary3: '#5e9abf',
  primary4: '#3b81b3',
  primary5: '#1c68a6',
  primary6: '#01509a',
  primary7: '#003773',
  primary8: '#00224d',
  primary9: '#001026',
  primary10: '#000000',
} as const satisfies IndexedPrimaries;

const chartColors = {
  chartColor1: '#01509A',
  chartColor1Tint: '#2983D8',
  chartColor2: '#35A0DC',
  chartColor2Tint: '#67C5FA',
  chartColor3: '#FFB155',
  chartColor3Tint: '#FFA800',
  chartColor4: '#31A652',
  chartColor4Tint: '#89DCA0',
  chartColor5: '#FF5252',
  chartColor5Tint: '#FFC1C1',
} as const satisfies ChartColors;

const background = BASE_COLORS.white;

const rgb = Object.fromEntries(
  Object.entries({ ...colorTypes, ...indexedPrimaries, ...chartColors, background } satisfies ITheme['rgb']).map(
    ([key, hexColor]) => [key, hexToRGB(hexColor)],
  ),
) as ITheme['rgb'];

export const lightColorsTheme = {
  ...indexedPrimaries,
  successBg: '#e1f0e4',
  successBorder: '#a1d6ad',
  primaryGradient: 'linear-gradient(211.49deg, #006CCF 15.89%, #00509A 48.97%)',
  light: '#C5D3E0',
  secondary: '#0085FF',
  background,
  secondaryBackground: '#F8FBFF',
  secondaryBackgroundSelected: shadeColor('#F8FBFF', -5),
  additionalBackground: '#ffffff',
  collapseBackground: 'rgb(0, 108, 207)',
  timelineBackground: '#F8FBFF',
  siderBackground: '#ffffff',
  spinnerBase: '#f42f25',
  scroll: '#c5d3e0',
  border: '#cce1f4',
  textMain: '#404040',
  textLight: '#9A9B9F',
  textSuperLight: '#BEC0C6',
  textSecondary: BASE_COLORS.white,
  textDark: '#404040',
  textSiderPrimary: '#FFB765',
  textSiderSecondary: '#ffffff',
  subText: 'rgba(0, 0, 0, 0.45)',
  shadow: 'rgba(0, 0, 0, 0.07)',
  boxShadow: '0 2px 8px 0 rgba(0, 0, 0, 0.07)',
  boxShadowHover: '0 4px 16px 0 rgba(0, 0, 0, 0.2)',
  ...colorTypes,
  rgb,
  nft: {
    border: '#79819A',
    textLight: '#79819A',
    boxShadow: '0px 16px 24px rgba(0, 0, 0, 0.06), 0px 2px 6px rgba(0, 0, 0, 0.04), 0px 0px 1px rgba(0, 0, 0, 0.04)',
    boxShadowSecondary:
      '0px 10px 20px rgba(0, 0, 0, 0.04), 0px 2px 6px rgba(0, 0, 0, 0.04), 0px 0px 1px rgba(0, 0, 0, 0.04)',
  },
  dashboardMapBackground: '#EAF5FF',
  dashboardMapCircleColor: '#9BC2E7',
  dashboardMapControlDisabledBackground: '#c5d3e0',
  notification: {
    primary: '#D7EBFF',
    success: '#EFFFF4',
    warning: '#FFF4E7',
    error: '#FFE2E2',
  },
  heading: '#13264d',
  borderBase: '#bec0c6',
  disabled: 'rgba(0, 0, 0, 0.25)',
  disabledBg: '#c5d3e0',
  layoutBodyBg: '#f8fbff',
  layoutHeaderBg: 'transparent',
  layoutSiderBg: 'linear-gradient(261.31deg, #006ccf -29.57%, #00509a 121.11%)',
  inputPlaceholder: '#404040',
  itemHoverBg: '#f5f5f5',
  backgroundColorBase: '#F5F5F5',
  avatarBg: '#ccc',
  alertTextColor: BASE_COLORS.white,
  breadcrumb: 'rgba(0, 0, 0, 0.45)',
  icon: '#a9a9a9',
  iconHover: 'rgba(0, 0, 0, 0.75)',
  chartTooltipLabel: '#6A7985',
  ...chartColors,
  chartPrimaryGradient: new graphic.LinearGradient(0, 0, 0, 1, [
    {
      offset: 0,
      color: 'rgba(0, 110, 211, 0.5)',
    },
    {
      offset: 1,
      color: 'rgba(255, 225, 255, 0)',
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
  ...BASE_COLORS,
  fontSizes: FONT_SIZE,
  heights: HEIGHTS,
  borderRadius: BORDER_RADIUS,
  fontWeights: FONT_WEIGHT,
  fontFamilies: FONT_FAMILY,
  breakpoints: BREAKPOINTS,
  selectionDisabled: '#bfbfbf',
  split: '#f0f0f0',
  sliderFillColor: '#e1e1e1',
  newsFilterBoxShadow: '0 4px 40px rgba(0, 0, 0, 0.07)',
  radioBoxShadow: `0 0 0 3px rgba(${rgb.primary}, 0.12)`,
  treatmentCalendarEventBoxShadow: '0 5px 15px rgba(0, 89, 171, 0.3)',
  modalBoxShadow:
    '0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 9px 28px 8px rgba(0, 0, 0, 0.05)',
  margins: MARGINS,
  paddings: PADDINGS,
} as const satisfies ITheme;
