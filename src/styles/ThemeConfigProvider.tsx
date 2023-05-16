import { FC, useMemo, ReactNode } from 'react';
import { ThemeConfig, ConfigProvider } from 'antd';
import { ThemeType } from '@app/interfaces/interfaces';

import {
  FONT_FAMILY,
  FONT_SIZE,
  FONT_WEIGHT,
  BORDER_RADIUS,
  BREAKPOINTS,
  BASE_COLORS,
  HEIGHT,
} from '@app/styles/themes/constants';
import { themeObject } from './themes/themeVariables';
import { hexToRGB } from '@app/utils/utils';

export interface ThemeConfigProviderProps {
  theme: ThemeType;
  children: ReactNode;
}

const remToPixels = (s: `${number}rem`) => parseFloat(s) * 16;

const parseNumber = (s: `${number}` | `${number}px`) => parseFloat(s);

export const ThemeConfigProvider: FC<ThemeConfigProviderProps> = ({ theme, children }) => {
  const themeConfig = useMemo<ThemeConfig>(() => {
    const currentTheme = themeObject[theme];

    const colorFillAlter = `rgba(${hexToRGB(currentTheme.primary)}, 0.05)`;

    const fontFamily = `'${FONT_FAMILY.main}', sans-serif`;

    return {
      token: {
        colorPrimary: currentTheme.primary,

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

        colorPrimaryHover: 'var(--ant-primary-5)',

        ...(theme === 'dark'
          ? {
              colorSuccessBg: 'var(--ant-success-color-deprecated-bg)',
              colorSuccessBorder: 'var(--ant-success-color-deprecated-border)',
            }
          : {}),

        fontFamily,

        fontSize: remToPixels(FONT_SIZE.md),

        fontSizeSM: remToPixels(FONT_SIZE.xs),

        controlHeightSM: remToPixels(HEIGHT.xs),

        controlHeight: remToPixels(HEIGHT.md),

        controlHeightLG: remToPixels(HEIGHT.lg),

        borderRadius: parseNumber(BORDER_RADIUS),

        colorSplit: '#f0f0f0',

        screenXSMin: BREAKPOINTS.xs,
        screenXS: BREAKPOINTS.xs,
        screenXSMax: BREAKPOINTS.xs,

        screenSMMin: BREAKPOINTS.sm,
        screenSM: BREAKPOINTS.sm,
        screenSMMax: BREAKPOINTS.sm,

        screenMDMin: BREAKPOINTS.md,
        screenMD: BREAKPOINTS.md,
        screenMDMax: BREAKPOINTS.md,

        screenLGMin: BREAKPOINTS.lg,
        screenLG: BREAKPOINTS.lg,
        screenLGMax: BREAKPOINTS.lg,

        screenXLMin: BREAKPOINTS.xl,
        screenXL: BREAKPOINTS.xl,
        screenXLMax: BREAKPOINTS.xl,

        screenXXLMin: BREAKPOINTS.xxl,
        screenXXL: BREAKPOINTS.xxl,
      },
      // Some component tokens do not properly parse CSS variables.
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

          borderRadiusLG: parseNumber(BORDER_RADIUS),
        },
        Card: {
          colorTextHeading: currentTheme.textMain,

          padding: 20,

          fontSize: remToPixels(FONT_SIZE.lg),

          fontSizeSM: remToPixels(FONT_SIZE.md),

          paddingLG: 20,

          boxShadowTertiary: currentTheme.boxShadow,
          borderRadiusLG: parseNumber(BORDER_RADIUS),
        },
        Tabs: {
          colorPrimaryHover: 'var(--ant-primary-5)',
          colorPrimary: 'var(--ant-primary-color)',
        },
        Table: {
          borderRadiusLG: 0,

          colorBorderSecondary: '#b3cbe1',

          colorTextHeading: currentTheme.primary,
          colorFillAlter,

          controlItemBgActive: 'var(--ant-primary-1)',
          controlItemBgActiveHover: `rgba(${hexToRGB(currentTheme.primary)}, 0.12)`,
          colorBgContainer: `rgba(${hexToRGB(currentTheme.primary)}, 0.003)`,
        },
        Checkbox: {
          colorBgContainer: 'transparent',

          colorPrimary: currentTheme.primary,
          colorTextDisabled: currentTheme.disable,
          controlInteractiveSize: 16,
          marginXS: 0,
        },
        Tag: {
          fontSize: remToPixels(FONT_SIZE.xs),
        },
        Select: {
          fontSizeSM: remToPixels(FONT_SIZE.xs),
          borderRadiusXS: parseNumber(BORDER_RADIUS),
          borderRadiusSM: parseNumber(BORDER_RADIUS),

          colorFillSecondary: currentTheme.backgroundColorBase,
          colorIcon: currentTheme.icon,
          colorPrimary: 'var(--ant-primary-color)',
          colorPrimaryHover: 'var(--ant-primary-5)',
          controlItemBgActive: 'var(--ant-primary-1)',
          controlItemBgHover: currentTheme.itemHoverBg,
        },
        Steps: {
          wireframe: true,
          controlHeight: remToPixels(HEIGHT.xs),
          controlHeightSM: remToPixels(HEIGHT.xxs),
          fontSizeHeading3: remToPixels(FONT_SIZE.xxl),
          colorPrimary: currentTheme.primary,
          colorTextDescription: currentTheme.subText,
        },
        Spin: {
          controlHeight: remToPixels(HEIGHT.xs),
          controlHeightLG: remToPixels(HEIGHT.sm),
          colorPrimary: 'var(--ant-primary-color)',
        },
        Skeleton: {
          controlHeightXS: 16,
          controlHeightSM: remToPixels(HEIGHT.xs),
          controlHeight: remToPixels(HEIGHT.md),
          controlHeightLG: remToPixels(HEIGHT.lg),
          color: 'rgba(190, 190, 190, 0.2)',
        },
        Switch: {
          controlHeight: remToPixels(HEIGHT.xs),

          colorPrimary: 'var(--ant-primary-color)',
          colorWhite: currentTheme.background,
          opacityLoading: 0.4,
        },
        Menu: {
          controlHeightLG: remToPixels(HEIGHT.md),

          fontSize: remToPixels(FONT_SIZE.xl),

          colorItemTextSelected: 'var(--ant-primary-color)',
          colorActiveBarWidth: 3,
          colorActiveBarBorderSize: 0,
          marginXXS: 8,
        },
        Popover: {
          zIndexPopup: 2000,

          wireframe: true,
          controlHeight: 34,
        },
        Popconfirm: {
          fontWeightStrong: parseNumber(FONT_WEIGHT.semibold),
          colorPrimary: currentTheme.primary,
        },
        Notification: {
          zIndexPopup: 9999,

          width: 36 * 16,

          paddingMD: 2 * 16,
          paddingLG: 0,
          paddingContentHorizontalLG: 2 * 16,

          lineHeightLG: 2,

          colorSuccess: currentTheme.success,
          colorInfo: currentTheme.primary,
          colorWarning: currentTheme.warning,
          colorError: currentTheme.error,

          fontFamily,
          fontSizeLG: remToPixels(FONT_SIZE.xxl),
          marginSM: 0,
          boxShadow:
            '0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 9px 28px 8px rgba(0, 0, 0, 0.05)',
          controlHeightLG: 15 / 0.55,
          wireframe: true,
        },
        Input: {
          colorTextPlaceholder: currentTheme.inputPlaceholder,
          colorTextDisabled: currentTheme.disable,
          colorPrimaryHover: 'var(--ant-primary-5)',
          controlOutline: 'var(--ant-primary-color-outline)',
          fontWeightStrong: parseNumber(FONT_WEIGHT.semibold),
          colorFillAlter,
        },
        InputNumber: {
          colorPrimary: 'var(--ant-primary-5)',
        },
        Form: {
          colorInfoBorderHover: 'var(--ant-primary-color-hover)',
        },
        Avatar: {
          colorTextPlaceholder: currentTheme.avatarBg,
          colorBorderBg: BASE_COLORS.white,
          controlHeightSM: remToPixels(HEIGHT.xxs),
          controlHeight: remToPixels(HEIGHT.xs),
          controlHeightLG: remToPixels(HEIGHT.sm),
        },
        Badge: {
          colorPrimary: 'var(--ant-primary-color)',
          colorTextPlaceholder: '#d9d9d9',
          fontSizeSM: remToPixels(FONT_SIZE.xxs),
        },
        Button: {
          colorPrimary: currentTheme.primary,
          borderRadiusSM: parseNumber(BORDER_RADIUS),
          controlOutline: '0',
          controlOutlineWidth: 0,
        },
        Breadcrumb: {
          colorTextDescription: currentTheme.breadcrumb,
        },
        Rate: {
          'yellow-6': '#ffc24b',
          colorFillContent: '#f0f0f0',
        },
        Radio: {
          colorPrimary: 'var(--ant-primary-color)',
          controlItemBgActiveDisabled: '#e6e6e6',
        },
        Result: {
          fontSizeHeading3: remToPixels(FONT_SIZE.xxl),
        },
        Pagination: {
          wireframe: true,
          colorPrimary: 'var(--ant-primary-color)',
          controlItemBgActiveDisabled: '#e6e6e6',
        },
        Slider: {
          colorPrimaryBorder: 'var(--ant-primary-3)',

          colorPrimary: 'var(--ant-primary-4)',
          colorPrimaryBorderHover: 'var(--ant-primary-4)',

          colorFillSecondary: '#e1e1e1',
          colorBorderSecondary: '#e1e1e1',
          colorFillContentHover: '#e1e1e1',

          colorFillTertiary: currentTheme.backgroundColorBase,

          handleSize: 8,

          colorTextDisabled: currentTheme.disable,
        },
        Modal: {
          colorTextDescription: currentTheme.icon,
          wireframe: true,
        },
        Progress: {
          marginXS: 0,
          colorFillSecondary: currentTheme.backgroundColorBase,
        },
        DatePicker: {
          colorIcon: currentTheme.textLight,
          colorPrimary: '#1c68a6',
          controlItemBgActive: 'var(--ant-primary-1)',
          colorTextPlaceholder: currentTheme.inputPlaceholder,
          fontWeightStrong: parseNumber(FONT_WEIGHT.medium),
          controlHeightSM: remToPixels(HEIGHT.xs),
          controlHeightLG: remToPixels(HEIGHT.lg),
        },
        Dropdown: {
          controlHeight: 34,
        },
        Upload: {
          colorFillAlter,
          colorPrimaryHover: 'var(--ant-primary-5)',
        },
      },
    };
  }, [theme]);

  return <ConfigProvider theme={themeConfig}>{children}</ConfigProvider>;
};
