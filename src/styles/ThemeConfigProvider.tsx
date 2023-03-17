import { PropsWithChildren } from 'react';
import { ConfigProvider } from 'antd';
import { ThemeType } from '@app/interfaces/interfaces';

import { FONT_SIZE, BORDER_RADIUS, FONT_WEIGHT, BREAKPOINTS } from '@app/styles/themes/constants';
import { themeObject } from './themes/themeVariables';
import { hexToRGB } from '@app/utils/utils';

export interface ThemeConfigProviderProps extends PropsWithChildren {
  theme: ThemeType;
}

export const ThemeConfigProvider = ({ theme, children }: ThemeConfigProviderProps): JSX.Element => {
  return (
    <ConfigProvider
      theme={{
        token: {
          ...{
            colorPrimary: 'var(--primary-color)',

            boxShadow: 'var(--box-shadow)',

            // @heading-color: var(--heading-color);
            colorTextHeading: 'var(--heading-color)',

            // @component-background: var(--background-color);
            colorBgContainer: 'var(--background-color)',

            // @text-color: var(--text-main-color);
            colorText: 'var(--text-main-color)',

            // @item-hover-bg: var(--item-hover-bg);
            controlItemBgHover: 'var(--item-hover-bg)',

            // @background-color-base: var(--background-base-color);
            colorBgBase: 'var(--background-base-color)',

            // @border-color-base: var(--border-base-color);
            colorBorder: 'var(--border-base-color)',

            // @disabled-bg: var(--disabled-bg-color);
            colorBgContainerDisabled: 'var(--disabled-bg-color)',

            colorTextDisabled: 'var(--disabled-color)',

            colorBgElevated: 'var(--background-color)',

            colorFillAlter: `rgba(${hexToRGB(themeObject[theme].primary)}, 0.05)`,

            colorTextPlaceholder: 'var(--input-placeholder-color)',

            colorPrimaryHover: 'var(--ant-primary-5)',
          },
          ...(theme === 'dark'
            ? {
                colorSuccessBg: 'var(--ant-success-color-deprecated-bg)',
                colorSuccessBorder: 'var(--ant-success-color-deprecated-border)',
              }
            : {}),
          // base override

          // @font-family: 'Montserrat', sans-serif;
          fontFamily: "'Montserrat', sans-serif",

          // @font-size-base: 16px;
          fontSize: parseFloat(FONT_SIZE.md) * 16,

          // @font-size-sm: @font-size-base - 2px;
          fontSizeSM: parseFloat(FONT_SIZE.xs) * 16,

          // @height-sm: 32px;
          controlHeightSM: 32,

          // @height-base: 50px;
          controlHeight: 50,

          // @height-lg: 64px;
          controlHeightLG: 64,

          // @border-radius-base: 7px;
          borderRadius: parseInt(BORDER_RADIUS),

          // @border-color-split: #f0f0f0;
          colorSplit: '#f0f0f0',

          // Media queries

          // @screen-xs: 360px;
          screenXSMin: BREAKPOINTS.xs,
          screenXS: BREAKPOINTS.xs,
          screenXSMax: BREAKPOINTS.xs,

          // @screen-sm: 568px;
          screenSMMin: BREAKPOINTS.sm,
          screenSM: BREAKPOINTS.sm,
          screenSMMax: BREAKPOINTS.sm,

          screenMDMin: BREAKPOINTS.md,
          screenMD: BREAKPOINTS.md,
          screenMDMax: BREAKPOINTS.md,

          screenLGMin: BREAKPOINTS.lg,
          screenLG: BREAKPOINTS.lg,
          screenLGMax: BREAKPOINTS.lg,

          // @screen-xl: 1280px;
          screenXLMin: BREAKPOINTS.xl,
          screenXL: BREAKPOINTS.xl,
          screenXLMax: BREAKPOINTS.xl,

          // @screen-xxl: 1920px;
          screenXXLMin: BREAKPOINTS.xxl,
          screenXXL: BREAKPOINTS.xxl,
        },
        components: {
          Layout: {
            // @layout-header-height: 4.25rem;
            controlHeight: 34,

            // @layout-header-padding: 1rem;
            controlHeightLG: 12.8,

            // @layout-body-background: var(--layout-body-bg-color);
            colorBgBody: 'var(--layout-body-bg-color)',

            /* 
              @layout-header-background: var(--layout-header-bg-color);
              @layout-sider-background: var(--layout-sider-bg-color);
            */
            colorBgHeader: 'var(--layout-sider-bg-color)',
          },
          Alert: {
            // @alert-info-bg-color: #dfefff;
            colorInfoBg: '#dfefff',

            // @alert-text-color: var(--alert-text-color);
            colorText: 'var(--alert-text-color)',

            marginXS: 8,

            marginSM: 15,
            paddingContentVerticalSM: 8,

            paddingMD: 15,
            paddingContentHorizontalLG: 15,

            borderRadiusLG: parseInt(BORDER_RADIUS),
          },
          Card: {
            // @card-head-color: @text-color;
            colorTextHeading: 'var(--text-main-color)',

            // @card-head-padding: 20px;
            padding: 20,

            // @card-head-font-size: 18px;
            fontSize: 18,

            // @card-head-font-size-sm: @font-size-base;
            fontSizeSM: parseFloat(FONT_SIZE.md) * 16,

            // @card-padding-base: 20px;
            paddingLG: 20,

            boxShadowTertiary: 'var(--box-shadow)',
            borderRadiusLG: parseInt(BORDER_RADIUS),

            // @card-padding-base-sm: 15px;
            // paddingXS: 15,
          },
          Collapse: {
            //
          },
          Tabs: {
            colorPrimaryHover: 'var(--ant-primary-5)',
            colorPrimary: 'var(--ant-primary-color)',
          },
          Table: {
            // @table-border-radius-base: 0;
            borderRadiusLG: 0,

            // @table-border-color: #b3cbe1;
            colorBorderSecondary: '#b3cbe1',

            colorTextHeading: 'var(--primary-color)',
            colorFillAlter: `rgba(${hexToRGB(themeObject[theme].primary)}, 0.05)`,

            controlItemBgActive: 'var(--ant-primary-1)',
            controlItemBgActiveHover: `rgba(${hexToRGB(themeObject[theme].primary)}, 0.12)`,
            colorBgContainer: `rgba(${hexToRGB(themeObject[theme].primary)}, 0.003)`,
          },
          Checkbox: {
            // @checkbox-check-bg: transparent;
            colorBgContainer: 'transparent',

            colorPrimary: 'var(--primary-color)',
            colorTextDisabled: 'var(--disabled-color)',
            controlInteractiveSize: 16,
            marginXS: 0,
          },
          Tag: {
            // @tag-font-size: @font-size-sm;
            fontSize: parseFloat(FONT_SIZE.xs) * 16,
          },
          Select: {
            fontSizeSM: parseFloat(FONT_SIZE.xs) * 16,
            borderRadiusXS: parseInt(BORDER_RADIUS),
            borderRadiusSM: parseInt(BORDER_RADIUS),

            colorFillSecondary: 'var(--background-base-color)',
            colorIcon: 'var(--icon-color)',
            colorPrimary: 'var(--ant-primary-color)',
            colorPrimaryHover: 'var(--ant-primary-5)',
            controlItemBgActive: 'var(--ant-primary-1)',
            controlItemBgHover: 'var(--item-hover-bg)',
          },
          Steps: {
            wireframe: true,
            controlHeight: 32,
            controlHeightSM: 24,
            fontSizeHeading3: 24,
            colorPrimary: 'var(--primary-color)',
            colorTextDescription: 'var(--subtext-color)',
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
            colorWhite: 'var(--background-color)',
            opacityLoading: 0.4,
          },
          Menu: {
            // @menu-item-height: @height-base;
            controlHeightLG: 50,

            // @menu-icon-size: 1.25rem;
            fontSize: parseFloat(FONT_SIZE.xl) * 16,

            colorItemTextSelected: 'var(--ant-primary-color)',
            colorActiveBarWidth: 3,
            colorActiveBarBorderSize: 0,
            marginXXS: 8,
          },
          Popover: {
            // @zindex-popover: 2000;
            zIndexPopup: 2000,

            wireframe: true,
            controlHeight: 34,
          },
          Popconfirm: {
            fontWeightStrong: parseInt(FONT_WEIGHT.semibold),
            colorPrimary: 'var(--primary-color)',
          },
          Notification: {
            // @zindex-notification: 9999;
            zIndexPopup: 9999,

            // .ant-notification-notice {
            // width: 36rem;
            width: 36 * 16,

            // padding: 2rem;
            paddingMD: 2 * 16,
            paddingContentHorizontalLG: 2 * 16,

            lineHeightLG: 2.8125,

            colorSuccess: 'var(--success-color)',
            colorInfo: 'var(--primary-color)',
            colorWarning: 'var(--warning-color)',
            colorError: 'var(--error-color)',

            fontWeightStrong: parseInt(FONT_WEIGHT.semibold),
            fontSize: 500,
            fontSizeLG: 500,
            fontSizeHeading3: 24,
          },
          Input: {
            // @input-placeholder-color: var(--input-placeholder-color);
            colorTextPlaceholder: 'var(--input-placeholder-color)',

            // @input-disabled-color: var(--disabled-color);
            colorTextDisabled: 'var(--disabled-color)',

            fontWeightStrong: parseInt(FONT_WEIGHT.semibold),
            colorFillAlter: `rgba(${hexToRGB(themeObject[theme].primary)}, 0.05)`,
          },
          InputNumber: {
            colorPrimary: 'var(--ant-primary-5)',
          },
          Form: {
            colorInfoBorderHover: 'var(--ant-primary-color-hover)',
          },
          Avatar: {
            // @avatar-bg: var(--avatar-bg);
            colorTextPlaceholder: 'var(--avatar-bg)',
            colorBorderBg: 'var(--white)',
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
            colorPrimary: 'var(--primary-color)',
            borderRadiusSM: parseInt(BORDER_RADIUS),
            controlOutline: '0',
            controlOutlineWidth: 0,
          },
          Breadcrumb: {
            /*
              @breadcrumb-base-color: var(--breadcrumb-color);
              @breadcrumb-link-color: var(--breadcrumb-color);
              @breadcrumb-separator-color: var(--breadcrumb-color);
            */
            colorTextDescription: 'var(--breadcrumb-color)',
          },
          Rate: {
            // @rate-star-color: #ffc24b;
            'yellow-6': '#ffc24b',
            colorFillContent: '#f0f0f0',
          },
          Radio: {
            // @radio-disabled-button-checked-color: var(--disabled-color);
            colorPrimary: 'var(--ant-primary-color)',
            controlItemBgActiveDisabled: '#e6e6e6',
          },
          Result: {
            fontSizeHeading3: parseFloat(FONT_SIZE.xxl) * 16,
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

            colorFillTertiary: 'var(--background-base-color)',

            handleSize: 8,

            // @slider-disabled-color: var(--disabled-color);
            colorTextDisabled: 'var(--disabled-color)',
          },
          Modal: {
            // @modal-close-color: var(--icon-color);
            colorTextDescription: 'var(--icon-color)',
            wireframe: true,
          },
          Progress: {
            marginXS: 0,
            // @progress-remaining-color: var(--background-base-color);
            colorFillSecondary: 'var(--background-base-color)',
          },
          DatePicker: {
            colorIcon: 'var(--text-light-color)',
            colorPrimary: '#1c68a6', // var(--ant-primary-5) in light theme
            controlItemBgActive: 'var(--ant-primary-1)',
            colorTextPlaceholder: 'var(--input-placeholder-color)',
            fontWeightStrong: parseInt(FONT_WEIGHT.medium),
            controlHeightSM: 32,
            controlHeightLG: 64,
          },
          Dropdown: {
            controlHeight: 34,
          },
          Upload: {
            colorFillAlter: `rgba(${hexToRGB(themeObject[theme].primary)}, 0.05)`,
            colorPrimaryHover: 'var(--ant-primary-5)',
          },
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
};
