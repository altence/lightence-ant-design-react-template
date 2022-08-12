import { hexToRGB } from '@app/utils/utils';
import { css } from 'styled-components';
import { BASE_COLORS } from './constants';
import { darkColorsTheme } from './dark/darkTheme';
import { lightColorsTheme } from './light/lightTheme';

export const themeObject = {
  light: lightColorsTheme,
  dark: darkColorsTheme,
};

export const lightThemeVariables = css`
  color-scheme: light;
  --primary-color: ${lightColorsTheme.primary};
  --primary-gradient-color: ${lightColorsTheme.primaryGradient};
  --info-color: var(--primary-color);
  --secondary-color: ${lightColorsTheme.secondary};
  --error-color: ${lightColorsTheme.error};
  --warning-color: ${lightColorsTheme.warning};
  --success-color: ${lightColorsTheme.success};
  --angular-gradient-color: ${lightColorsTheme.angularGradient};
  --background-color: ${lightColorsTheme.background};
  --secondary-background-color: ${lightColorsTheme.secondaryBackground};
  --secondary-background-selected-color: ${lightColorsTheme.secondaryBackgroundSelected};
  --spinner-base-color: ${lightColorsTheme.spinnerBase};
  --shadow-color: ${lightColorsTheme.shadow};
  --border-color: ${lightColorsTheme.border};

  --primary-rgb-color: ${hexToRGB(lightColorsTheme.primary)};
  --info-rgb-color: ${hexToRGB(lightColorsTheme.primary)};
  --secondary-color: ${hexToRGB(lightColorsTheme.secondary)};
  --error-rgb-color: ${hexToRGB(lightColorsTheme.error)};
  --warning-rgb-color: ${hexToRGB(lightColorsTheme.warning)};
  --success-rgb-color: ${hexToRGB(lightColorsTheme.success)};
  --background-rgb-color: ${hexToRGB(lightColorsTheme.background)};

  --text-main-color: ${lightColorsTheme.textMain};
  --text-light-color: ${lightColorsTheme.textLight};
  --text-superLight-color: ${lightColorsTheme.textSuperLight};
  --text-secondary-color: ${lightColorsTheme.textSecondary};
  --text-dark-color: ${lightColorsTheme.textDark};

  --dashboard-map-background-color: ${lightColorsTheme.dashboardMapBackground};
  --dashboard-map-dots-color: ${lightColorsTheme.dashboardMapDots};
  --dashboard-map-dots-hovered-color: ${lightColorsTheme.dashboardMapDotsHover};
  --dashboard-map-marker-border-color: ${lightColorsTheme.dashboardMapMarkerBorder};
  --dashboard-map-control-color: ${lightColorsTheme.dashboardMapControl};
  --dashboard-map-control-background-color: ${lightColorsTheme.dashboardMapControlBackground};
  --dashboard-map-control-disabled-background-color: ${lightColorsTheme.dashboardMapControlDisabledBackground};

  --chart-tooltip-label-color: ${lightColorsTheme.chartTooltipLabel};
  --chart-color1: ${lightColorsTheme.chartColor1};
  --chart-rgb-color1: ${hexToRGB(lightColorsTheme.chartColor1)};
  --chart-color1-tint: ${lightColorsTheme.chartColor1Tint};
  --chart-color2: ${lightColorsTheme.chartColor2};
  --chart-color2-tint: ${lightColorsTheme.chartColor2Tint};
  --chart-color3: ${lightColorsTheme.chartColor3};
  --chart-color3-tint: ${lightColorsTheme.chartColor3Tint};
  --chart-color4: ${lightColorsTheme.chartColor4};
  --chart-color4-tint: ${lightColorsTheme.chartColor4Tint};
  --chart-color5: ${lightColorsTheme.chartColor5};
  --chart-rgb-color5: ${hexToRGB(lightColorsTheme.chartColor5)};
  --chart-color5-tint: ${lightColorsTheme.chartColor5Tint};

  --notification-success-color: ${lightColorsTheme.notificationSuccess};
  --notification-primary-color: ${lightColorsTheme.notificationPrimary};
  --notification-warning-color: ${lightColorsTheme.notificationWarning};
  --notification-error-color: ${lightColorsTheme.notificationError};

  --box-shadow: ${lightColorsTheme.boxShadow};
  --box-shadow-hover: ${lightColorsTheme.boxShadowHover};
`;

export const darkThemeVariables = css`
  color-scheme: light;
  --primary-color: ${darkColorsTheme.primary};
  --primary-gradient-color: ${darkColorsTheme.primaryGradient};
  --info-color: var(--primary-color);
  --secondary-color: ${darkColorsTheme.secondary};
  --error-color: ${darkColorsTheme.error};
  --warning-color: ${darkColorsTheme.warning};
  --success-color: ${darkColorsTheme.success};
  --angular-gradient-color: ${darkColorsTheme.angularGradient};
  --background-color: ${darkColorsTheme.background};
  --secondary-background-color: ${darkColorsTheme.secondaryBackground};
  --secondary-background-selected-color: ${darkColorsTheme.secondaryBackgroundSelected};
  --spinner-base-color: ${darkColorsTheme.spinnerBase};
  --shadow-color: ${darkColorsTheme.shadow};
  --border-color: ${darkColorsTheme.border};

  --primary-rgb-color: ${hexToRGB(darkColorsTheme.primary)};
  --info-rgb-color: ${hexToRGB(darkColorsTheme.primary)};
  --secondary-color: ${hexToRGB(darkColorsTheme.secondary)};
  --error-rgb-color: ${hexToRGB(darkColorsTheme.error)};
  --warning-rgb-color: ${hexToRGB(darkColorsTheme.warning)};
  --success-rgb-color: ${hexToRGB(darkColorsTheme.success)};
  --background-rgb-color: ${hexToRGB(darkColorsTheme.background)};

  --text-main-color: ${darkColorsTheme.textMain};
  --text-light-color: ${darkColorsTheme.textLight};
  --text-superLight-color: ${darkColorsTheme.textSuperLight};
  --text-secondary-color: ${darkColorsTheme.textSecondary};
  --text-dark-color: ${darkColorsTheme.textDark};

  --dashboard-map-background-color: ${darkColorsTheme.dashboardMapBackground};
  --dashboard-map-dots-color: ${darkColorsTheme.dashboardMapDots};
  --dashboard-map-dots-hovered-color: ${darkColorsTheme.dashboardMapDotsHover};
  --dashboard-map-marker-border-color: ${darkColorsTheme.dashboardMapMarkerBorder};
  --dashboard-map-control-color: ${darkColorsTheme.dashboardMapControl};
  --dashboard-map-control-background-color: ${darkColorsTheme.dashboardMapControlBackground};
  --dashboard-map-control-disabled-background-color: ${darkColorsTheme.dashboardMapControlDisabledBackground};

  --chart-tooltip-label-color: ${darkColorsTheme.chartTooltipLabel};
  --chart-color1: ${darkColorsTheme.chartColor1};
  --chart-rgb-color1: ${hexToRGB(darkColorsTheme.chartColor1)};
  --chart-color1-tint: ${darkColorsTheme.chartColor1Tint};
  --chart-color2: ${darkColorsTheme.chartColor2};
  --chart-color2-tint: ${darkColorsTheme.chartColor2Tint};
  --chart-color3: ${darkColorsTheme.chartColor3};
  --chart-color3-tint: ${darkColorsTheme.chartColor3Tint};
  --chart-color4: ${darkColorsTheme.chartColor4};
  --chart-color4-tint: ${darkColorsTheme.chartColor4Tint};
  --chart-color5: ${darkColorsTheme.chartColor5};
  --chart-rgb-color5: ${hexToRGB(darkColorsTheme.chartColor5)};
  --chart-color5-tint: ${darkColorsTheme.chartColor5Tint};

  --notification-success-color: ${darkColorsTheme.notificationSuccess};
  --notification-primary-color: ${darkColorsTheme.notificationPrimary};
  --notification-warning-color: ${darkColorsTheme.notificationWarning};
  --notification-error-color: ${darkColorsTheme.notificationError};

  --box-shadow: ${darkColorsTheme.boxShadow};
  --box-shadow-hover: ${darkColorsTheme.boxShadowHover};
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
