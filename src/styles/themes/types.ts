import type * as CSS from 'csstype';
import type { LinearGradientObject } from 'echarts';
import type { Breakpoint } from 'antd';
import type { PresetColorKey } from 'antd/es/theme/interface';

type IndexedPrimary = `primary${1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10}`;

export type IndexedPrimaries = Record<IndexedPrimary, string>;

type ChartColor = `chartColor${1 | 2 | 3 | 4 | 5}${'Tint' | ''}`;

export type ChartColors = Record<`chartColor${1 | 2 | 3 | 4 | 5}${'Tint' | ''}`, string>;

export type NamedColors = Record<CSS.DataType.NamedColor | PresetColorKey, string>;

export type ColorType = 'primary' | 'success' | 'warning' | 'error';

type ColorTypes = Record<ColorType, string>;

type RGB = Record<ColorType | IndexedPrimary | ChartColor | 'background', string>;

type NFT = Record<'border' | 'textLight' | 'boxShadow' | 'boxShadowSecondary', string>;

export type FontWeights = Record<
  'thin' | 'extraLight' | 'light' | 'regular' | 'medium' | 'semibold' | 'bold' | 'extraBold' | 'black',
  number
>;

export type NamedIndexes = Record<'main' | 'secondary' | 'tertiary' | 'quaternary', string>;

export enum WidthCategory {
  /** mobile */
  small = 'xs',
  /** tablet */
  medium = 'md',
  /** desktop */
  large = 'xl',
}

export type WidthCategories =
  | Record<WidthCategory, number>
  | Record<WidthCategory, string>
  | Record<WidthCategory, readonly number[]>
  | Record<WidthCategory, readonly string[]>;

export type RelativeSizeKey = Breakpoint | `${'xx' | 'xxx' | 'xxxx'}${'s' | 'l'}`;

export type RelativeSizes = Record<RelativeSizeKey, number> | Record<RelativeSizeKey, string>;

export interface ITheme extends ColorTypes, IndexedPrimaries, ChartColors, Partial<NamedColors> {
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
  rgb: RGB;
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
  treatmentCalendarEventBoxShadow: string;
  modalBoxShadow: string;
  margins: Partial<RelativeSizes>;
  paddings: Partial<RelativeSizes>;
}
