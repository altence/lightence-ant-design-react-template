import type { ThemeConfig } from 'antd';
import { remToPixels } from '@app/utils/utils';
import { DefaultTheme } from 'styled-components';

const modalBoxShadow =
  '0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 9px 28px 8px rgba(0, 0, 0, 0.05)';

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
      colorSuccessBg: theme['successBg'],
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
        boxShadow: modalBoxShadow,
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
        boxShadow: modalBoxShadow,
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
