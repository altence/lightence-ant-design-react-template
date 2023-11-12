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
  primary: '#339CFD',
  success: '#57D682',
  warning: '#FFB765',
  error: '#FF5252',
} as const satisfies Record<ColorType, string>;

const indexedPrimaries = {
  primary1: '#7568f6',
  primary2: '#d6f1ff',
  primary3: '#ade0ff',
  primary4: '#85ccff',
  primary5: '#5cb6ff',
  primary6: '#339cfd',
  primary7: '#2078d6',
  primary8: '#1259b0',
  primary9: '#073d8a',
  primary10: '#042963',
} as const satisfies IndexedPrimaries;

const chartColors = {
  chartColor1: '#339CFD',
  chartColor1Tint: '#339CFD',
  chartColor2: '#dc88f5',
  chartColor2Tint: '#dc88f5',
  chartColor3: '#FFB765',
  chartColor3Tint: '#FFB765',
  chartColor4: '#306955',
  chartColor4Tint: '#306955',
  chartColor5: '#ff3d71',
  chartColor5Tint: '#ff3d71',
} as const satisfies ChartColors;

const background = '#25284B';

const rgb = Object.fromEntries(
  Object.entries({ ...colorTypes, ...indexedPrimaries, ...chartColors, background } satisfies ITheme['rgb']).map(
    ([key, hexColor]) => [key, hexToRGB(hexColor)],
  ),
) as ITheme['rgb'];

export const darkColorsTheme = {
  ...indexedPrimaries,
  successBg: '#e6fff2',
  successBorder: '#79fcc4',
  primaryGradient: 'linear-gradient(211.49deg, #dc88f5 15.89%, #339CFD 48.97%)',
  light: '#696969',
  secondary: '#0072DD',
  background,
  secondaryBackground: '#1c2137',
  secondaryBackgroundSelected: shadeColor('#1c2137', -5),
  additionalBackground: '#1D203E',
  collapseBackground: '#1D203E',
  timelineBackground: '#f5f5f5',
  siderBackground: '#121430',
  spinnerBase: '#339CFD',
  scroll: '#797C9A',
  border: '#ffffff',
  textMain: '#ffffff',
  textLight: '#9A9B9F',
  textSuperLight: '#444',
  textSecondary: '#ffffff',
  textDark: '#404040',
  textSiderPrimary: '#339CFD',
  textSiderSecondary: '#797C9A',
  subText: '#a9a9a9',
  shadow: 'rgba(0, 0, 0, 0.07)',
  boxShadow: 'none',
  boxShadowHover: 'none',
  ...colorTypes,
  rgb,
  nft: {
    border: '#797c9a',
    textLight: '#797C9A',
    boxShadow: '0px 16px 24px rgba(0, 0, 0, 0.06), 0px 2px 6px rgba(0, 0, 0, 0.04), 0px 0px 1px rgba(0, 0, 0, 0.04)',
    boxShadowSecondary:
      '0px 10px 20px rgba(0, 0, 0, 0.04), 0px 2px 6px rgba(0, 0, 0, 0.04), 0px 0px 1px rgba(0, 0, 0, 0.04)',
  },
  dashboardMapBackground: '#25284b',
  dashboardMapCircleColor: '#ACAEC1',
  dashboardMapControlDisabledBackground: '#7e7e7e',
  notification: {
    primary: '#D7EBFF',
    success: '#EFFFF4',
    warning: '#FFF4E7',
    error: '#FFE2E2',
  },
  heading: BASE_COLORS.white,
  borderBase: '#a9a9a9',
  disabled: '#7e7e7e',
  disabledBg: '#1c2137',
  layoutBodyBg: '#1e2142',
  layoutHeaderBg: '#1e2142',
  layoutSiderBg: '#121430',
  inputPlaceholder: 'rgba(255, 255, 255, 0.5)',
  itemHoverBg: '#1c2137',
  backgroundColorBase: '#1c2137',
  avatarBg: '#1c2137',
  alertTextColor: '#000',
  breadcrumb: '#a9a9a9',
  icon: '#a9a9a9',
  iconHover: '#ffffff',
  chartTooltipLabel: '#6a7985',
  ...chartColors,
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
