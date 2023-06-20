import type { ThemeConfig } from 'antd';
import type { ThemeType } from '@app/interfaces/interfaces';
import {
  FONT_FAMILY,
  FONT_SIZE,
  FONT_WEIGHT,
  BORDER_RADIUS,
  BREAKPOINTS,
  BASE_COLORS,
  HEIGHT,
} from '@app/styles/themes/constants';
import { antThemeObject, themeObject } from './themes/themeVariables';
import { hexToRGB } from '@app/utils/utils';

const remToPixels = (s: `${number}rem`) => parseFloat(s) * 16;

const parseNumber = (s: `${number}` | `${number}px`) => parseFloat(s);

const fontFamily = `'${FONT_FAMILY.main}', sans-serif`;

const borderRadius = parseNumber(BORDER_RADIUS);

const modalBoxShadow =
  '0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 9px 28px 8px rgba(0, 0, 0, 0.05)';

export const getThemeConfig = (theme: ThemeType): ThemeConfig => {
  const currentTheme = themeObject[theme];
  const antTheme = antThemeObject[theme];

  const colorFillAlter = `rgba(${hexToRGB(currentTheme.primary)}, 0.05)`;

  // In some properties CSS variables are not parsed properly.
  return {
    token: {
      colorPrimary: currentTheme.primary,
      colorInfo: currentTheme.primary,
      colorSuccess: currentTheme.success,
      colorError: currentTheme.error,
      colorWarning: currentTheme.warning,
      boxShadow: currentTheme.boxShadow,
      colorTextHeading: currentTheme.heading,
      colorBgContainer: currentTheme.background,
      colorText: currentTheme.textMain,
      controlItemBgHover: currentTheme.itemHoverBg,
      colorBgBase: currentTheme.backgroundColorBase,
      colorBorder: currentTheme.borderBase,
      colorBgContainerDisabled: currentTheme.disabledBg,
      colorTextDisabled: currentTheme.disable,
      colorBgElevated: currentTheme.background,
      colorFillAlter,
      colorTextPlaceholder: currentTheme.inputPlaceholder,
      colorPrimaryHover: antTheme.primary5,
      ...(theme === 'dark'
        ? {
            colorSuccessBg: antThemeObject[theme].successBg,
            colorSuccessBorder: antThemeObject[theme].successBorder,
          }
        : {}),
      fontFamily,
      fontFamilyCode: fontFamily,
      fontSize: remToPixels(FONT_SIZE.md),
      fontSizeSM: remToPixels(FONT_SIZE.xs),
      controlHeightSM: remToPixels(HEIGHT.xs),
      controlHeight: remToPixels(HEIGHT.md),
      controlHeightLG: remToPixels(HEIGHT.lg),
      borderRadiusXS: borderRadius,
      borderRadiusSM: borderRadius,
      borderRadius,
      borderRadiusLG: borderRadius,
      borderRadiusOuter: borderRadius,
      colorSplit: '#f0f0f0',
      controlOutline: antTheme.primaryColorOutline,
      controlOutlineWidth: 2,
      lineWidthFocus: 0,
      screenXSMin: 0,
      screenXS: BREAKPOINTS.xs,
      screenXSMax: BREAKPOINTS.sm - 1,
      screenSMMin: BREAKPOINTS.sm,
      screenSM: BREAKPOINTS.sm,
      screenSMMax: BREAKPOINTS.md - 1,
      screenMDMin: BREAKPOINTS.md,
      screenMD: BREAKPOINTS.md,
      screenMDMax: BREAKPOINTS.lg - 1,
      screenLGMin: BREAKPOINTS.lg,
      screenLG: BREAKPOINTS.lg,
      screenLGMax: BREAKPOINTS.xl - 1,
      screenXLMin: BREAKPOINTS.xl,
      screenXL: BREAKPOINTS.xl,
      screenXLMax: BREAKPOINTS.xxl - 1,
      screenXXLMin: BREAKPOINTS.xxl,
      screenXXL: BREAKPOINTS.xxl,
    },
    components: {
      Layout: {
        controlHeight: 34,
        controlHeightLG: 12.8,
        colorBgBody: currentTheme.layoutBodyBg,
        colorBgHeader: currentTheme.layoutSiderBg,
      },
      Alert: {
        colorInfoBg: '#dfefff',
        colorText: currentTheme.alertTextColor,
        marginXS: 8,
        marginSM: 15,
        paddingContentVerticalSM: 8,
        paddingMD: 15,
        paddingContentHorizontalLG: 15,
      },
      Card: {
        colorTextHeading: currentTheme.textMain,
        padding: 20,
        paddingLG: 20,
        boxShadowTertiary: currentTheme.boxShadow,
      },
      Tabs: {
        colorPrimaryHover: antTheme.primary5,
        colorPrimary: antTheme.primaryColor,
        colorPrimaryActive: antTheme.primary7,
        colorTextDisabled: currentTheme.disable,
        colorBorderSecondary: '#f0f0f0',
      },
      Tree: {
        controlHeightSM: remToPixels(HEIGHT.xxs),
        controlInteractiveSize: 16,
      },
      Table: {
        borderRadiusLG: 0,
        colorBorderSecondary: '#b3cbe1',
        colorTextHeading: currentTheme.primary,
        colorFillAlter,
        controlItemBgActive: antTheme.primary1,
        colorSplit: 'rgba(0, 0, 0, 0.15)',
        controlItemBgActiveHover: `rgba(${hexToRGB(currentTheme.primary)}, 0.12)`,
      },
      Checkbox: {
        colorBgContainer: 'transparent',
        colorPrimary: currentTheme.primary,
        colorTextDisabled: currentTheme.disable,
        controlInteractiveSize: 16,
        marginXS: 8,
      },
      Tag: {
        fontSize: remToPixels(FONT_SIZE.xs),
      },
      Select: {
        fontSizeSM: remToPixels(FONT_SIZE.xs),
        lineWidth: 0.8,
        colorFillSecondary: currentTheme.backgroundColorBase,
        colorIcon: currentTheme.icon,
        colorPrimary: antTheme.primaryColor,
        colorPrimaryHover: antTheme.primary5,
        controlItemBgActive: antTheme.primary1,
        controlItemBgHover: currentTheme.itemHoverBg,
      },
      Steps: {
        wireframe: true,
        iconSize: remToPixels(HEIGHT.xs),
        iconFontSize: remToPixels(FONT_SIZE.lg),
        controlHeight: remToPixels(HEIGHT.md),
        controlHeightSM: remToPixels(HEIGHT.xxs),
        fontSizeHeading3: remToPixels(FONT_SIZE.xxl),
        colorPrimary: currentTheme.primary,
        colorTextDescription: currentTheme.subText,
      },
      Spin: {
        controlHeight: remToPixels(HEIGHT.xs),
        controlHeightLG: remToPixels(HEIGHT.sm),
        colorPrimary: antTheme.primaryColor,
      },
      Skeleton: {
        controlHeightXS: 16,
        controlHeightSM: remToPixels(HEIGHT.xs),
        controlHeight: remToPixels(HEIGHT.md),
        controlHeightLG: remToPixels(HEIGHT.lg),
        gradientFromColor: 'rgba(190, 190, 190, 0.2)',
      },
      Switch: {
        controlHeight: remToPixels(HEIGHT.xs),
        colorPrimary: antTheme.primaryColor,
        colorWhite: currentTheme.background,
        lineHeight: 1.375,
        lineWidthFocus: 1,
        colorPrimaryBorder: antTheme.primary1,
        opacityLoading: 0.4,
      },
      Menu: {
        controlHeightLG: remToPixels(HEIGHT.md),
        fontSize: remToPixels(FONT_SIZE.xs),
        itemSelectedColor: antTheme.primaryColor,
        colorFillAlter: `rgba(${hexToRGB(antThemeObject['light'].primary6)}, 0.05)`,
        colorSplit: 'transparent',
        activeBarWidth: 2,
        marginXXS: 4,
        controlHeightSM: 30,
        itemMarginInline: 0,
      },
      Divider: {
        colorSplit: 'rgba(0, 0, 0, 0.06)',
      },
      Popover: {
        zIndexPopup: 2000,
        wireframe: true,
        controlHeight: 34,
        sizePopupArrow: 20,
      },
      Popconfirm: {
        fontWeightStrong: parseNumber(FONT_WEIGHT.semibold),
        colorPrimary: currentTheme.primary,
      },
      Notification: {
        zIndexPopup: 9999,
        width: 36 * 16,
        paddingMD: 20,
        paddingLG: 20,
        paddingContentHorizontalLG: 2 * 16,
        lineHeightLG: 2,
        colorSuccess: currentTheme.success,
        colorInfo: currentTheme.primary,
        colorWarning: currentTheme.warning,
        colorError: currentTheme.error,
        fontSizeLG: remToPixels(FONT_SIZE.xxl),
        marginSM: 0,
        boxShadow: modalBoxShadow,
        controlHeightLG: 15 / 0.55,
        wireframe: true,
      },
      Empty: {
        controlHeightLG: remToPixels(HEIGHT.sm),
      },
      Input: {
        colorTextPlaceholder: currentTheme.inputPlaceholder,
        colorTextDisabled: currentTheme.disable,
        colorPrimaryHover: antTheme.primary5,
        fontWeightStrong: parseNumber(FONT_WEIGHT.semibold),
        colorFillAlter,
      },
      InputNumber: {
        colorPrimary: antTheme.primary5,
      },
      Form: {
        marginLG: 16,
        colorInfoBorderHover: antTheme.primaryColorHover,
      },
      Avatar: {
        colorTextPlaceholder: currentTheme.avatarBg,
        colorBorderBg: BASE_COLORS.white,
        controlHeightSM: remToPixels(HEIGHT.xxs),
        controlHeight: remToPixels(HEIGHT.xs),
        controlHeightLG: remToPixels(HEIGHT.sm),
      },
      Badge: {
        colorPrimary: antTheme.primaryColor,
        colorTextPlaceholder: '#d9d9d9',
        fontSizeSM: remToPixels(FONT_SIZE.xxs),
      },
      Button: {
        colorPrimary: currentTheme.primary,
        controlTmpOutline: antTheme.primaryColorOutline,
        controlOutline: '0',
        controlOutlineWidth: 0,
      },
      Breadcrumb: {
        fontSizeIcon: 10,
        colorTextDescription: currentTheme.breadcrumb,
      },
      Rate: {
        starColor: '#ffc24b',
        colorFillContent: '#f0f0f0',
      },
      Radio: {
        colorPrimary: antTheme.primaryColor,
        wireframe: true,
        controlItemBgActiveDisabled: '#e6e6e6',
      },
      Result: {
        fontSizeHeading3: remToPixels(FONT_SIZE.xxl),
        lineHeightHeading3: 1.8,
        colorTextDescription: currentTheme.breadcrumb,
      },
      Pagination: {
        wireframe: true,
        colorPrimary: antTheme.primaryColor,
        controlItemBgActiveDisabled: '#e6e6e6',
      },
      Slider: {
        colorPrimaryBorder: antTheme.primary3,
        colorPrimary: antTheme.primary4,
        colorPrimaryBorderHover: antTheme.primary4,
        colorFillSecondary: '#e1e1e1',
        colorBorderSecondary: '#e1e1e1',
        colorFillContentHover: '#e1e1e1',
        colorFillTertiary: currentTheme.backgroundColorBase,
        handleSize: 8,
        colorTextDisabled: currentTheme.disable,
      },
      Calendar: {
        controlHeightSM: remToPixels(HEIGHT.xs) / 1.5,
      },
      Modal: {
        colorTextDescription: currentTheme.icon,
        colorIcon: currentTheme.icon,
        boxShadow: modalBoxShadow,
        wireframe: true,
      },
      Progress: {
        marginXS: 0,
        colorFillSecondary: currentTheme.backgroundColorBase,
      },
      DatePicker: {
        colorIcon: currentTheme.textLight,
        colorTextDisabled: currentTheme.textLight,
        colorPrimary: '#1c68a6',
        controlItemBgActive: antTheme.primary1,
        colorTextPlaceholder: currentTheme.inputPlaceholder,
        fontWeightStrong: parseNumber(FONT_WEIGHT.medium),
        controlHeightSM: remToPixels(HEIGHT.xxs),
        controlHeightLG: remToPixels(HEIGHT.sm),
        padding: 13,
        paddingXXS: 2,
      },
      Dropdown: {
        paddingXXS: 0,
        controlHeight: 34,
      },
      Upload: {
        colorFillAlter,
        colorPrimaryHover: antTheme.primary5,
      },
    },
  };
};
