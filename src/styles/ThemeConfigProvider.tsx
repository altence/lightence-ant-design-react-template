import { PropsWithChildren } from 'react';
import { ConfigProvider } from 'antd';
import { ThemeType } from '@app/interfaces/interfaces';

import {
  FONT_FAMILY,
  FONT_SIZE,
  FONT_WEIGHT,
  BORDER_RADIUS,
  BREAKPOINTS,
  BASE_COLORS,
} from '@app/styles/themes/constants';
import { themeObject } from './themes/themeVariables';
import { hexToRGB } from '@app/utils/utils';

export interface ThemeConfigProviderProps extends PropsWithChildren {
  theme: ThemeType;
}

const remToPixels = (s: `${number}rem`) => parseFloat(s) * 16;

export const ThemeConfigProvider = ({ theme, children }: ThemeConfigProviderProps): JSX.Element => {
  const currentTheme = themeObject[theme];

  const colorFillAlter = `rgba(${hexToRGB(currentTheme.primary)}, 0.05)`;

  const fontFamily = `'${FONT_FAMILY.main}', sans-serif`;

  return (
    <ConfigProvider
      theme={{
        token: {
          ...{
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
          },
          ...(theme === 'dark'
            ? {
                colorSuccessBg: 'var(--ant-success-color-deprecated-bg)',
                colorSuccessBorder: 'var(--ant-success-color-deprecated-border)',
              }
            : {}),
          // base override

          fontFamily,

          fontSize: remToPixels(FONT_SIZE.md),

          fontSizeSM: remToPixels(FONT_SIZE.xs),

          controlHeightSM: 32,

          controlHeight: 50,

          controlHeightLG: 64,

          borderRadius: parseFloat(BORDER_RADIUS),

          colorSplit: '#f0f0f0',

          // Media queries

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

            borderRadiusLG: parseFloat(BORDER_RADIUS),
          },
          Card: {
            colorTextHeading: currentTheme.textMain,

            padding: 20,

            fontSize: 18,

            fontSizeSM: remToPixels(FONT_SIZE.md),

            paddingLG: 20,

            boxShadowTertiary: currentTheme.boxShadow,
            borderRadiusLG: parseFloat(BORDER_RADIUS),
          },
          Collapse: {},
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
            borderRadiusXS: parseFloat(BORDER_RADIUS),
            borderRadiusSM: parseFloat(BORDER_RADIUS),

            colorFillSecondary: currentTheme.backgroundColorBase,
            colorIcon: currentTheme.icon,
            colorPrimary: 'var(--ant-primary-color)',
            colorPrimaryHover: 'var(--ant-primary-5)',
            controlItemBgActive: 'var(--ant-primary-1)',
            controlItemBgHover: currentTheme.itemHoverBg,
          },
          Steps: {
            wireframe: true,
            controlHeight: 32,
            controlHeightSM: 24,
            fontSizeHeading3: 24,
            colorPrimary: currentTheme.primary,
            colorTextDescription: currentTheme.subText,
          },
          Spin: {
            controlHeight: 32,
            controlHeightLG: 40,
            colorPrimary: 'var(--ant-primary-color)',
          },
          Skeleton: {
            controlHeightXS: 16,
            controlHeightSM: 32,
            controlHeight: 50,
            controlHeightLG: 64,
            color: 'rgba(190, 190, 190, 0.2)',
          },
          Switch: {
            controlHeight: 32,

            colorPrimary: 'var(--ant-primary-color)',
            colorWhite: currentTheme.background,
            opacityLoading: 0.4,
          },
          Menu: {
            controlHeightLG: 50,

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
            fontWeightStrong: parseFloat(FONT_WEIGHT.semibold),
            colorPrimary: currentTheme.primary,
          },
          Notification: {
            zIndexPopup: 9999,

            width: 36 * 16,

            paddingMD: 2 * 16,
            paddingContentHorizontalLG: 2 * 16,

            lineHeightLG: 2.8125,

            colorSuccess: currentTheme.notificationSuccess,
            colorInfo: currentTheme.primary,
            colorWarning: currentTheme.notificationWarning,
            colorError: currentTheme.notificationError,

            fontFamily,
            fontWeightStrong: parseFloat(FONT_WEIGHT.semibold),
            fontSize: 500,
            fontSizeLG: 500,
            fontSizeHeading3: 24,
          },
          Input: {
            colorTextPlaceholder: currentTheme.inputPlaceholder,
            colorTextDisabled: currentTheme.disable,
            colorPrimaryHover: 'var(--ant-primary-5)',
            controlOutline: 'var(--ant-primary-color-outline)',
            fontWeightStrong: parseFloat(FONT_WEIGHT.semibold),
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
            controlHeightSM: 24,
            controlHeight: 32,
            controlHeightLG: 40,
          },
          Badge: {
            colorPrimary: 'var(--ant-primary-color)',
            colorTextPlaceholder: '#d9d9d9',
            fontSizeSM: 12,
          },
          Button: {
            colorPrimary: currentTheme.primary,
            borderRadiusSM: parseFloat(BORDER_RADIUS),
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
            fontWeightStrong: parseFloat(FONT_WEIGHT.medium),
            controlHeightSM: 32,
            controlHeightLG: 64,
          },
          Dropdown: {
            controlHeight: 34,
          },
          Upload: {
            colorFillAlter,
            colorPrimaryHover: 'var(--ant-primary-5)',
          },
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
};
