import type { ThemeConfig } from 'antd';
import type { DefaultTheme } from 'styled-components';
import { themeObject } from './themes/themeVariables';

const remToPixels = (s: `${number}rem`) => parseFloat(s) * 16;

export const getThemeConfig = (theme: DefaultTheme): ThemeConfig => {
  const fontFamily = `'${theme.fontFamilies.main}', sans-serif`;
  const borderRadius = parseInt(theme.borderRadius);

  const colorFillAlter = `rgba(${theme.rgb.primary}, 0.05)`;

  const controlOutline = `rgba(${theme.rgb.primary}, 0.2)`;

  // In some properties CSS variables are not parsed properly.
  return {
    token: {
      colorPrimary: theme.primary,
      colorInfo: theme.primary,
      colorSuccess: theme.success,
      colorError: theme.error,
      colorWarning: theme.warning,
      boxShadow: theme.boxShadow,
      colorTextHeading: theme.heading,
      colorTextDescription: theme.subText,
      colorBgContainer: theme.background,
      colorText: theme.textMain,
      controlItemBgHover: theme.itemHoverBg,
      colorBgBase: theme.backgroundColorBase,
      colorBorder: theme.borderBase,
      colorBgContainerDisabled: theme.disabledBg,
      colorTextDisabled: theme.disabled,
      colorBgElevated: theme.background,
      colorFillAlter,
      colorTextPlaceholder: theme.inputPlaceholder,
      colorPrimaryHover: theme.primary5,
      colorSuccessBg: theme.successBg,
      colorSuccessBorder: theme.successBorder,
      fontFamily,
      fontFamilyCode: fontFamily,
      fontSize: remToPixels(theme.fontSizes.md),
      fontSizeSM: remToPixels(theme.fontSizes.xs),
      controlHeightSM: remToPixels(theme.heights.xs),
      controlHeight: remToPixels(theme.heights.md),
      controlHeightLG: remToPixels(theme.heights.lg),
      borderRadiusXS: borderRadius,
      borderRadiusSM: borderRadius,
      borderRadius,
      borderRadiusLG: borderRadius,
      borderRadiusOuter: borderRadius,
      colorSplit: theme.split,
      wireframe: true,
      controlOutline,
      controlTmpOutline: controlOutline,
      controlOutlineWidth: 2,
      lineWidthFocus: 0,
      screenXSMin: 0,
      screenXS: theme.breakpoints.xs,
      screenXSMax: theme.breakpoints.sm - 1,
      screenSMMin: theme.breakpoints.sm,
      screenSM: theme.breakpoints.sm,
      screenSMMax: theme.breakpoints.md - 1,
      screenMDMin: theme.breakpoints.md,
      screenMD: theme.breakpoints.md,
      screenMDMax: theme.breakpoints.lg - 1,
      screenLGMin: theme.breakpoints.lg,
      screenLG: theme.breakpoints.lg,
      screenLGMax: theme.breakpoints.xl - 1,
      screenXLMin: theme.breakpoints.xl,
      screenXL: theme.breakpoints.xl,
      screenXLMax: theme.breakpoints.xxl - 1,
      screenXXLMin: theme.breakpoints.xxl,
      screenXXL: theme.breakpoints.xxl,
    },
    components: {
      Alert: {
        colorInfoBg: '#dfefff',
        colorText: theme.black,
        colorTextHeading: theme.black,
        marginSM: 15,
        paddingContentVerticalSM: 8,
        paddingMD: 15,
        paddingContentHorizontalLG: 15,
      },
      Badge: {
        colorPrimary: theme.primary,
        colorTextPlaceholder: '#d9d9d9',
        fontSizeSM: remToPixels(theme.fontSizes.xxs),
      },
      Breadcrumb: {
        fontSizeIcon: 10,
        colorTextDescription: theme.breadcrumb,
      },
      Calendar: {
        controlHeightSM: remToPixels(theme.heights.xs) / 1.5,
      },
      Card: {
        colorTextHeading: theme.textMain,
        padding: 20,
        paddingLG: 20,
        boxShadowTertiary: theme.boxShadow,
      },
      Divider: {
        colorSplit: 'rgba(0, 0, 0, 0.06)',
      },
      Empty: {
        controlHeightLG: remToPixels(theme.heights.sm),
      },
      Menu: {
        controlHeightLG: remToPixels(theme.heights.md),
        fontSize: remToPixels(theme.fontSizes.xs),
        colorFillAlter: `rgba(${themeObject['light'].rgb.primary6}, 0.05)`,
        colorBgContainer: 'unset',
        controlItemBgActive: 'unset',
        colorBgTextHover: 'transparent',
        itemSelectedColor: theme.textSiderPrimary,
        colorText: theme.textSiderSecondary,
        colorSplit: 'transparent',
        activeBarWidth: 2,
        marginXXS: 4,
        controlHeightSM: 30,
        itemMarginInline: 0,
      },
      Pagination: {
        colorPrimary: theme.primary,
        controlItemBgActiveDisabled: '#e6e6e6',
        itemSizeSM: 24,
        controlHeightLG: remToPixels(theme.heights.sm),
      },
      Popconfirm: {
        fontWeightStrong: theme.fontWeights.semibold,
        colorPrimary: theme.primary,
      },
      Popover: {
        zIndexPopup: 2000,
        controlHeight: 34,
        sizePopupArrow: 20,
      },
      Progress: {
        marginXS: 0,
        colorFillSecondary: theme.backgroundColorBase,
      },
      Rate: {
        starColor: '#ffc24b',
        colorFillContent: theme.split,
      },
      Result: {
        fontSizeHeading3: remToPixels(theme.fontSizes.xxl),
        lineHeightHeading3: 1.8,
      },
      Slider: {
        colorPrimaryBorder: theme.primary3,
        colorPrimary: theme.primary4,
        colorPrimaryBorderHover: theme.primary4,
        colorFillSecondary: theme.sliderFillColor,
        colorBorderSecondary: theme.sliderFillColor,
        colorFillContentHover: theme.sliderFillColor,
        colorFillTertiary: theme.backgroundColorBase,
        handleSize: 11,
        handleSizeHover: 11,
        handleLineWidth: 2,
        handleLineWidthHover: 2,
        colorTextDisabled: theme.disabled,
      },
      Spin: {
        controlHeight: remToPixels(theme.heights.xs),
        controlHeightLG: remToPixels(theme.heights.sm),
        colorPrimary: theme.primary,
      },
      Steps: {
        iconSize: remToPixels(theme.heights.xs),
        iconFontSize: remToPixels(theme.fontSizes.lg),
        controlHeight: remToPixels(theme.heights.md),
        controlHeightSM: remToPixels(theme.heights.xxs),
        fontSizeHeading3: remToPixels(theme.fontSizes.xxl),
        colorPrimary: theme.primary,
      },
      Switch: {
        controlHeight: remToPixels(theme.heights.xs),
        colorPrimary: theme.primary,
        colorWhite: theme.background,
        lineHeight: 1.375,
        colorPrimaryBorder: theme.primary1,
        opacityLoading: 0.4,
      },
      Table: {
        borderRadiusLG: 0,
        colorBorderSecondary: '#b3cbe1',
        colorTextHeading: theme.primary,
        colorFillAlter: `rgba(${theme.rgb.primary}, 0.05)`,
        controlItemBgActive: theme.primary1,
        colorSplit: 'rgba(0, 0, 0, 0.15)',
        controlItemBgActiveHover: `rgba(${theme.rgb.primary}, 0.12)`,
      },
      Tabs: {
        colorPrimaryHover: theme.primary5,
        colorPrimary: theme.primary,
        colorPrimaryActive: theme.primary7,
        colorTextDisabled: theme.disabled,
        colorBorderSecondary: theme.split,
      },
      InputNumber: {
        colorPrimary: theme.primary5,
      },
      Layout: {
        controlHeight: 34,
        controlHeightLG: 12.8,
        colorBgBody: theme.layoutBodyBg,
        colorBgHeader: theme.layoutSiderBg,
      },
      Tree: {
        controlHeightSM: remToPixels(theme.heights.xxs),
        controlInteractiveSize: 16,
      },
      Checkbox: {
        colorBgContainer: 'transparent',
        colorPrimary: theme.primary,
        colorTextDisabled: theme.disabled,
        controlInteractiveSize: 16,
        marginXS: 8,
      },
      Tag: {
        fontSize: remToPixels(theme.fontSizes.xs),
      },
      Select: {
        fontSizeSM: remToPixels(theme.fontSizes.xs),
        colorTextTertiary: theme.icon,
        colorTextQuaternary: theme.textMain, // arrow color
        colorFillSecondary: theme.backgroundColorBase,
        colorIcon: theme.icon,
        colorIconHover: theme.iconHover,
        colorPrimary: theme.primary,
        colorPrimaryHover: theme.primary5,
        controlItemBgActive: theme.primary1,
        controlItemBgHover: theme.itemHoverBg,
      },
      Skeleton: {
        controlHeightXS: 16,
        controlHeightSM: remToPixels(theme.heights.xs),
        controlHeight: remToPixels(theme.heights.md),
        controlHeightLG: remToPixels(theme.heights.lg),
        gradientFromColor: 'rgba(190, 190, 190, 0.2)',
      },
      Notification: {
        zIndexPopup: 9999,
        width: 36 * 16,
        paddingMD: 20,
        paddingLG: 20,
        paddingContentHorizontalLG: 2 * 16,
        lineHeightLG: 2,
        colorSuccess: theme.success,
        colorInfo: theme.primary,
        colorWarning: theme.warning,
        colorError: theme.error,
        colorIconHover: 'rgba(0, 0, 0, 0.67)',
        fontSizeLG: remToPixels(theme.fontSizes.xxl),
        marginSM: 0,
        boxShadow: theme.modalBoxShadow,
        controlHeightLG: 15 / 0.55,
      },
      Input: {
        colorTextPlaceholder: theme.inputPlaceholder,
        colorTextDisabled: theme.disabled,
        colorPrimaryHover: theme.primary5,
        fontWeightStrong: theme.fontWeights.semibold,
        colorFillAlter,
        controlOutlineWidth: 0,
      },
      Form: {
        marginLG: 16,
        colorInfoBorderHover: theme.primary5,
      },
      Avatar: {
        colorTextPlaceholder: theme.avatarBg,
        colorBorderBg: theme.white,
        controlHeightSM: remToPixels(theme.heights.xxs),
        controlHeight: remToPixels(theme.heights.xs),
        controlHeightLG: remToPixels(theme.heights.sm),
      },
      Button: {
        colorPrimary: theme.primary,
        colorLinkHover: theme.primary5,
        controlOutlineWidth: 0,
      },
      Radio: {
        colorPrimary: theme.primary,
        controlItemBgActiveDisabled: '#e6e6e6',
      },
      Modal: {
        colorTextDescription: theme.icon,
        colorIcon: theme.icon,
        boxShadow: theme.modalBoxShadow,
        lineHeight: 1.57,
      },
      DatePicker: {
        colorIcon: theme.textLight,
        colorTextDisabled: theme.textLight,
        colorPrimary: '#1c68a6',
        controlItemBgActive: theme.primary1,
        colorTextPlaceholder: theme.inputPlaceholder,
        fontWeightStrong: theme.fontWeights.medium,
        controlHeightSM: remToPixels(theme.heights.xxs),
        controlHeightLG: remToPixels(theme.heights.sm),
        padding: 13,
        paddingXXS: 2,
      },
      Dropdown: {
        paddingXXS: 0,
        fontSizeIcon: 10,
        controlHeight: 34,
      },
      Upload: {
        colorFillAlter: `rgba(${theme.rgb.primary}, 0.05)`,
        colorPrimaryHover: theme.primary5,
      },
    },
  };
};
