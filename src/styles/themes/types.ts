import 'styled-components';
import type { LinearGradientObject } from 'echarts';

type IndexedPrimary = Record<`primary${1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10}`, string>;

type ChartColor = Record<`chartColor${1 | 2 | 3 | 4 | 5}${'Tint' | ''}`, string>;

export type NamedColors = Record<
  | 'black'
  | 'blue'
  | 'cyan'
  | 'gray'
  | 'green'
  | 'lime'
  | 'magenta'
  | 'maroon'
  | 'navy'
  | 'olive'
  | 'purple'
  | 'red'
  | 'silver'
  | 'teal'
  | 'white'
  | 'yellow'
  | 'orange'
  | 'pink'
  | 'skyblue'
  | 'violet'
  | `${'light'}${'blue' | 'cyan' | 'gray' | 'green' | 'yellow'}`,
  string
>;

export type ColorType = 'primary' | 'success' | 'warning' | 'error';

type ColorTypes = Record<ColorType, string>;

type NFT = Record<'border' | 'textLight' | 'boxShadow' | 'boxShadowSecondary', string>;

export type FontWeights = Record<
  'thin' | 'extraLight' | 'light' | 'regular' | 'medium' | 'semibold' | 'bold' | 'extraBold' | 'black',
  number
>;

export type NamedIndexes = Record<'main' | 'secondary' | 'tertiary' | 'quaternary', string>;

export type RelativeSizeKey = 'sm' | 'md' | 'lg' | `${'x' | 'xx' | 'xxx' | 'xxxx'}${'s' | 'l'}`;

export type RelativeSizes = Record<RelativeSizeKey, number> | Record<RelativeSizeKey, string>;

export interface ITheme extends ColorTypes, IndexedPrimary, ChartColor, Partial<NamedColors> {
  primaryGradient: string;
  light: string;
  secondary: string;
  successBg?: string;
  successBorder?: string;
  background: string;
  secondaryBackground: string;
  secondaryBackgroundSelected: string;
  spinnerBase: string;
  siderBackground: string;
  collapseBackground: string;
  scroll: string;
  border: string;
  textMain: string;
  textLight: string;
  textSuperLight: string;
  textSecondary: string;
  textDark: string;
  textSiderPrimary: string;
  textSiderSecondary: string;
  subText: string;
  shadow: string;
  boxShadow: string;
  boxShadowHover: string;
  /** @summary strings in the format `'R, G, B'` */
  rgb: Record<ColorType | 'background', string>;
  nft: NFT;
  dashboardMapBackground: string;
  dashboardMapCircleColor: string;
  dashboardMapControlDisabledBackground: string;
  notification: ColorTypes;
  chartTooltipLabel: string;
  chartPrimaryGradient: LinearGradientObject;
  chartSecondaryGradient: LinearGradientObject;
  additionalBackground: string;
  timelineBackground: string;
  chartSecondaryGradientSpecular: LinearGradientObject;
  heading: string;
  borderBase: string;
  disabled: string;
  disabledBg: string;
  layoutBodyBg: string;
  layoutHeaderBg: string;
  layoutSiderBg: string;
  inputPlaceholder: string;
  itemHoverBg: string;
  backgroundColorBase: string;
  avatarBg: string;
  alertTextColor: string;
  breadcrumb: string;
  icon: string;
  iconHover: string;
  borderRadius: string;
  fontWeights: FontWeights;
  fontFamilies: Partial<NamedIndexes>;
  fontSizes: Partial<RelativeSizes>;
  heights: Partial<RelativeSizes>;
  breakpoints: Partial<RelativeSizes>;
  selectionDisabled: string;
  split: string;
  sliderFillColor: string;
  radioBoxShadow: string;
  newsFilterBoxShadow: string;
  chartsCardPadding: string;
  treatmentCalendarEventBoxShadow: string;
}
