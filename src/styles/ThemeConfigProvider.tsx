import { PropsWithChildren } from 'react';
import { ConfigProvider } from 'antd';
import { ThemeType } from '@app/interfaces/interfaces';
import { hexToRGB } from '@app/utils/utils';

import { antThemeObject, themeObject } from '@app/styles/themes/themeVariables';
import { FONT_SIZE, BORDER_RADIUS, FONT_WEIGHT } from '@app/styles/themes/constants';

export interface ThemeConfigProviderProps extends PropsWithChildren {
  theme: ThemeType;
}

export const ThemeConfigProvider = ({ theme, children }: ThemeConfigProviderProps): JSX.Element => {
  const currentTheme = themeObject[theme];
  return (
    <ConfigProvider
      theme={{
        token: {
          ...{
            colorPrimary: currentTheme.primary,

            boxShadow: currentTheme.boxShadow, // assume naming and meaning are same

            // 'heading-color': 'var(--heading-color)',
            colorTextHeading: currentTheme.heading,

            // 'component-background': 'var(--background-color)',
            colorBgContainer: currentTheme.background,

            // 'text-color': 'var(--text-main-color)',
            colorText: currentTheme.textMain,

            // 'item-hover-bg': 'var(--item-hover-bg)',
            controlItemBgHover: currentTheme.itemHoverBg,

            // 'background-color-base': 'var(--background-base-color)',
            colorBgBase: currentTheme.backgroundColorBase,

            // 'border-color-base': 'var(--border-base-color)',
            colorBorder: currentTheme.borderBase,

            // 'disabled-bg': 'var(--disabled-bg-color)',
            colorBgContainerDisabled: currentTheme.disabledBg,

            // --disabled-color
            colorTextDisabled: currentTheme.disable,

            colorBgElevated: currentTheme.background,

            colorFillAlter: `rgba(${hexToRGB(currentTheme.primary)}, 0.05)`,
          },
          ...(theme === 'dark'
            ? {
                colorSuccessBg: antThemeObject[theme].successBg,
                colorSuccessBorder: antThemeObject[theme].successBorder,
              }
            : antThemeObject[theme]),
          // base override

          // 'font-family': "'Montserrat', sans-serif",
          fontFamily: "'Montserrat', sans-serif",

          // 'font-size-base': '16px',
          fontSize: 16,

          // 'font-size-sm': '@font-size-base - 2px',
          fontSizeSM: 14,

          // 'height-sm': '32px',
          controlHeightSM: 32,

          // 'height-base': '50px',
          controlHeight: 50,

          // 'height-lg': '64px',
          controlHeightLG: 64,

          // 'border-radius-base': '7px',
          borderRadius: 7,

          // 'border-color-split': '#f0f0f0',
          colorSplit: '#f0f0f0',

          // Media queries

          // 'screen-xs': '360px',
          screenXS: 360,
          screenXSMin: 360,
          screenXSMax: 568,

          // 'screen-sm': '568px',
          screenSM: 568,
          screenSMMin: 568,
          // screenSMMax: 1280,

          // 'screen-xl': '1280px',
          screenXL: 1280,

          // 'screen-xxl': '1920px',
          screenXXL: 1920,
        },
        components: {
          Layout: {
            //'layout-header-height': '4.25rem',
            controlHeight: 34, // (4.25 * 16 / 2)

            // 'layout-header-padding': '1rem',
            controlHeightLG: 12.8, // (1 * 16 / 1.25) ?

            // 'layout-body-background': 'var(--layout-body-bg-color)',
            colorBgBody: currentTheme.layoutBodyBg,

            /* 
              'layout-header-background': 'var(--layout-header-bg-color)',
              'layout-sider-background': 'var(--layout-sider-bg-color)',
            */
            colorBgHeader: currentTheme.layoutSiderBg,
          },
          Alert: {
            // 'alert-info-bg-color': '#dfefff',
            colorInfoBg: '#dfefff',

            // 'alert-text-color': 'var(--alert-text-color)',
            colorText: currentTheme.alertTextColor,
            marginXS: 8,
            marginSM: 14,
          },
          Card: {
            // 'card-head-color': '@text-color',
            // ?

            // 'card-head-padding': '20px',
            padding: 20,
            boxShadowTertiary: currentTheme.boxShadow,
            // 'card-head-padding-sm': '15px',
            // ?

            // 'card-head-font-size': '18px',
            // ?

            // 'card-head-font-size-sm': '@font-size-base',
            // ?

            // 'card-padding-base': '20px',
            paddingLG: 20,

            // 'card-padding-base-sm': '15px',
            // ?
          },
          // Collapse: {          },
          Tabs: {
            colorPrimaryHover: 'var(--ant-primary-5)',
          },
          Table: {
            // 'table-border-radius-base': '0',
            borderRadiusLG: 0,

            // 'table-border-color': '#b3cbe1',
            colorBorderSecondary: '#b3cbe1',
          },
          Checkbox: {
            // 'checkbox-check-bg': 'transparent',
            colorBgContainer: 'transparent',
            controlInteractiveSize: 16,

            marginXS: 0,
          },
          Tag: {
            // 'tag-font-size': '@font-size-sm',
            fontSize: 14,
          },
          Select: {
            fontSizeSM: parseFloat(FONT_SIZE.xs) * 16,
            borderRadiusXS: parseInt(BORDER_RADIUS),
            borderRadiusSM: parseInt(BORDER_RADIUS),
          },
          Steps: {
            wireframe: true,
            controlHeight: 32,
            controlHeightSM: 24,
            fontSizeHeading3: 24,
          },
          Spin: {
            controlHeight: 32,
            controlHeightLG: 40,
          },
          Skeleton: {
            controlHeightXS: 16,
            controlHeightSM: 32,
            controlHeight: 50,
            controlHeightLG: 64,
          },
          Switch: {
            controlHeight: 32,
          },
          Menu: {
            // 'menu-inline-toplevel-item-height': '@height-base',
            // ?

            // 'menu-item-height': '@height-base',
            controlHeightLG: 50, // ?

            // 'menu-icon-margin-right': '1rem',
            // ?

            // 'menu-icon-size': '1.25rem',
            fontSize: 20, // ?

            // .ant-menu-inline,
            // .ant-menu-vertical {
            // border-right: 0;
            // borderInlineEnd: `${colorActiveBarBorderSize}px ${lineType} ${colorSplit}`
            colorActiveBarBorderSize: 0,
          },
          Popover: {
            // 'zindex-popover': '2000',
            zIndexPopup: 2000,
            wireframe: true,
            controlHeight: 34,
            colorBgElevated: currentTheme.background,
          },
          Popconfirm: {
            fontWeightStrong: parseInt(FONT_WEIGHT.semibold),
          },
          Notification: {
            // 'zindex-notification': '9999',
            zIndexPopup: 9999,

            // .ant-notification-notice {
            // width: 36rem;
            width: 36 * 16,

            // padding: 2rem;
            paddingMD: 2 * 16,
            paddingContentHorizontalLG: 2 * 16,

            /* 
              .ant-notification-notice-with-icon .ant-notification-notice-message {
              .ant-notification-notice-with-icon .ant-notification-notice-description { 
            */
            // marginInlineStart /* 540? */: token.marginSM /* 12 default */ + notificationIconSize /* 2.8125 * 16 */,

            // .ant-notification-notice-icon {
            // font-size: 2.8125rem;
            // notificationIconSize: token.fontSizeLG /* 16 default */ * token.lineHeightLG /* 1.5 default */,
            lineHeightLG: 2.8125, // ?

            // .ant-notification-notice-close {
            // top: 1.25rem;
            // const notificationPaddingVertical = token.paddingMD /* 2 * 16 */;

            // .success-icon {
            colorSuccess: currentTheme.success,
            // .info-icon {
            colorInfo: currentTheme.primary,
            // .warning-icon {
            colorWarning: currentTheme.warning,
            // .error-icon {
            colorError: currentTheme.error,

            fontWeightStrong: parseInt(FONT_WEIGHT.semibold),
            fontSize: 500,
            fontSizeLG: 500,
            fontSizeHeading3: 24,
          },
          Input: {
            // 'input-placeholder-color': 'var(--input-placeholder-color)',
            colorTextPlaceholder: currentTheme.inputPlaceholder,

            // 'input-disabled-color': 'var(--disabled-color)',
            colorTextDisabled: currentTheme.disable,

            fontWeightStrong: parseInt(FONT_WEIGHT.semibold),
            colorFillAlter: `rgba(${hexToRGB(currentTheme.primary)}, 0.05)`,
          },
          Avatar: {
            // 'avatar-bg': 'var(--avatar-bg)',
            colorTextPlaceholder: currentTheme.avatarBg,
            controlHeightSM: 24,
            controlHeight: 32,
            controlHeightLG: 40,
          },
          Breadcrumb: {
            /*
              'breadcrumb-base-color': 'var(--breadcrumb-color)',
              'breadcrumb-link-color': 'var(--breadcrumb-color)',
              'breadcrumb-separator-color': 'var(--breadcrumb-color)',
            */
            colorTextDescription: currentTheme.breadcrumb,
            colorText: currentTheme.textMain,
          },
          Rate: {
            // 'rate-star-color': '#ffc24b';
            'yellow-6': '#ffc24b',
            colorFillContent: '#f0f0f0',
          },
          Radio: {
            // 'radio-disabled-button-checked-color': 'var(--disabled-color)',
            // colorTextDisabled: currentTheme.disable,
          },
          Result: {
            fontSizeHeading3: parseFloat(FONT_SIZE.xxl) * 16,
          },
          Pagination: {
            wireframe: true,
          },
          Slider: {
            // 'slider-disabled-color': 'var(--disabled-color)',
            colorFillSecondary: currentTheme.disable, // ?
          },
          Modal: {
            // 'modal-close-color': 'var(--icon-color)',
            colorTextDescription: currentTheme.icon,
            wireframe: true,
            colorBgElevated: currentTheme.background,
          },
          Progress: {
            marginXS: 0,
            // 'progress-remaining-color': 'var(--background-base-color)',
            colorFillSecondary: currentTheme.backgroundColorBase,
          },
          DatePicker: {
            // .ant-picker-cell { color: var(--text-main-color); }
            colorText: currentTheme.textMain, // ?

            // .ant-picker svg { color: var(--text-light-color); }
            colorIcon: currentTheme.textLight, // ?

            fontFamily: "'Montserrat', sans-serif",
            colorTextPlaceholder: currentTheme.inputPlaceholder,
            fontWeightStrong: parseInt(FONT_WEIGHT.medium),
            controlHeightSM: 32,
            controlHeightLG: 64,
          },
          Dropdown: {
            // const dropdownPaddingVertical = (controlHeight - fontSize /* 16 */ * lineHeight /* ? */ ) / 2;
            controlHeight: 34,
          },
          Upload: {
            colorFillAlter: `rgba(${hexToRGB(currentTheme.primary)}, 0.05)`,
            colorPrimaryHover: 'var(--ant-primary-5)',
          },
          Form: {
            fontFamily: "'Montserrat', sans-serif",
            // fontFamily: 'inherit',
          },
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
};
