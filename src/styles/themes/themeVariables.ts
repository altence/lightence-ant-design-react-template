import { ThemeType } from '@app/interfaces/interfaces';
import { hexToRGB } from '@app/utils/utils';
import { css } from 'styled-components';
import { BASE_COLORS } from './constants';
import { darkColorsTheme, antDarkColorsTheme } from './dark/darkTheme';
import { lightColorsTheme } from './light/lightTheme';

export const themeObject = {
  light: lightColorsTheme,
  dark: darkColorsTheme,
};

export const antThemeObject = {
  light: {},
  dark: antDarkColorsTheme,
};

const getThemeVariables = (theme: ThemeType) => css`
  color-scheme: ${theme};
  --primary-color: ${themeObject[theme].primary};
  --primary1-color: ${themeObject[theme].primary1};
  --primary-gradient-color: ${themeObject[theme].primaryGradient};
  --info-color: var(--primary-color);
  --secondary-color: ${themeObject[theme].secondary};
  --error-color: ${themeObject[theme].error};
  --warning-color: ${themeObject[theme].warning};
  --success-color: ${themeObject[theme].success};
  --background-color: ${themeObject[theme].background};
  --secondary-background-color: ${themeObject[theme].secondaryBackground};
  --secondary-background-selected-color: ${themeObject[theme].secondaryBackgroundSelected};
  --additional-background-color: ${themeObject[theme].additionalBackground};
  --collapse-background-color: ${themeObject[theme].collapseBackground};
  --timeline-background-color: ${themeObject[theme].timelineBackground};
  --spinner-base-color: ${themeObject[theme].spinnerBase};
  --sider-background-color: ${themeObject[theme].siderBackground};
  --shadow-color: ${themeObject[theme].shadow};
  --border-color: ${themeObject[theme].border};
  --border-nft-color: ${themeObject[theme].borderNft};
  --scroll-color: ${themeObject[theme].scroll};

  --primary-rgb-color: ${hexToRGB(themeObject[theme].primary)};
  --info-rgb-color: ${hexToRGB(themeObject[theme].primary)};
  --secondary-rgb-color: ${hexToRGB(themeObject[theme].secondary)};
  --error-rgb-color: ${hexToRGB(themeObject[theme].error)};
  --warning-rgb-color: ${hexToRGB(themeObject[theme].warning)};
  --success-rgb-color: ${hexToRGB(themeObject[theme].success)};
  --background-rgb-color: ${hexToRGB(themeObject[theme].background)};

  --text-main-color: ${themeObject[theme].textMain};
  --text-light-color: ${themeObject[theme].textLight};
  --text-superLight-color: ${themeObject[theme].textSuperLight};
  --text-secondary-color: ${themeObject[theme].textSecondary};
  --text-dark-color: ${themeObject[theme].textDark};
  --text-nft-light-color: ${themeObject[theme].textNftLight};
  --text-sider-primary-color: ${themeObject[theme].textSiderPrimary};
  --text-sider-secondary-color: ${themeObject[theme].textSiderSecondary};
  --subtext-color: ${themeObject[theme].subText};

  --dashboard-map-background-color: ${themeObject[theme].dashboardMapBackground};
  --dashboard-map-circle-color: ${themeObject[theme].dashboardMapCircleColor};
  --dashboard-map-control-disabled-background-color: ${themeObject[theme].dashboardMapControlDisabledBackground};

  --chart-tooltip-label-color: ${themeObject[theme].chartTooltipLabel};
  --chart-color1: ${themeObject[theme].chartColor1};
  --chart-rgb-color1: ${hexToRGB(themeObject[theme].chartColor1)};
  --chart-color1-tint: ${themeObject[theme].chartColor1Tint};
  --chart-color2: ${themeObject[theme].chartColor2};
  --chart-color2-tint: ${themeObject[theme].chartColor2Tint};
  --chart-color3: ${themeObject[theme].chartColor3};
  --chart-color3-tint: ${themeObject[theme].chartColor3Tint};
  --chart-color4: ${themeObject[theme].chartColor4};
  --chart-color4-tint: ${themeObject[theme].chartColor4Tint};
  --chart-color5: ${themeObject[theme].chartColor5};
  --chart-rgb-color5: ${hexToRGB(themeObject[theme].chartColor5)};
  --chart-color5-tint: ${themeObject[theme].chartColor5Tint};

  --notification-success-color: ${themeObject[theme].notificationSuccess};
  --notification-primary-color: ${themeObject[theme].notificationPrimary};
  --notification-warning-color: ${themeObject[theme].notificationWarning};
  --notification-error-color: ${themeObject[theme].notificationError};

  --icon-color: ${themeObject[theme].icon};
  --icon-hover-color: ${themeObject[theme].iconHover};
  --box-shadow: ${themeObject[theme].boxShadow};
  --box-shadow-hover: ${themeObject[theme].boxShadowHover};
  --box-shadow-nft-color: ${themeObject[theme].boxShadowNft};
  --box-shadow-nft-secondary-color: ${themeObject[theme].boxShadowNftSecondary};

  --heading-color: ${themeObject[theme].heading};
  --item-hover-bg: ${themeObject[theme].itemHoverBg};
  --background-base-color: ${themeObject[theme].backgroundColorBase};
  --border-base-color: ${themeObject[theme].borderBase};
  --disabled-color: ${themeObject[theme].disable};
  --disabled-bg-color: ${themeObject[theme].disabledBg};
  --layout-body-bg-color: ${themeObject[theme].layoutBodyBg};
  --layout-header-bg-color: ${themeObject[theme].layoutHeaderBg};
  --layout-sider-bg-color: ${themeObject[theme].layoutSiderBg};
  --input-placeholder-color: ${themeObject[theme].inputPlaceholder};
  --avatar-bg: ${themeObject[theme].avatarBg};
  --alert-text-color: ${themeObject[theme].alertTextColor};
  --breadcrumb-color: ${themeObject[theme].breadcrumb};
`;

export const lightThemeVariables = css`
  ${getThemeVariables('light')}
`;

export const darkThemeVariables = css`
  ${getThemeVariables('dark')}
  --ant-success-color-deprecated-bg: ${antThemeObject['dark'].successBg} !important;
  --ant-success-color-deprecated-border: ${antThemeObject['dark'].successBorder} !important;
`;

export const commonThemeVariables = css`
  color-scheme: light dark;
  --white: ${BASE_COLORS.white};
  --black: ${BASE_COLORS.black};
  --green: ${BASE_COLORS.green};
  --orange: ${BASE_COLORS.orange};
  --gray: ${BASE_COLORS.gray};
  --lightgrey: ${BASE_COLORS.lightgrey};
  --violet: ${BASE_COLORS.violet};
  --lightgreen: ${BASE_COLORS.lightgreen};
  --pink: ${BASE_COLORS.pink};
  --blue: ${BASE_COLORS.blue};
  --skyblue: ${BASE_COLORS.skyblue};
  --red: ${BASE_COLORS.red};
`;

export const antOverrideCssVariables = css`
  --ant-primary-1: var(--primary1-color) !important;
`;
