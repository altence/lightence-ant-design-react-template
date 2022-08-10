import { hexToRGB, shadeColor } from '@app/utils/utils';
import { css } from 'styled-components';
import { darkTheme } from './darkTheme';

export const darkColors = css`
  color-scheme: dark;
  --primary-color: ${darkTheme.colors.main.primary};
  --primary-gradient-color: ${darkTheme.colors.main.primaryGradient};
  --info-color: var(--primary-color);
  --secondary-color: ${darkTheme.colors.main.secondary};
  --error-color: ${darkTheme.colors.main.error};
  --warning-color: ${darkTheme.colors.main.warning};
  --success-color: ${darkTheme.colors.main.success};
  --angular-gradient-color: ${darkTheme.colors.main.angularGradient};
  --background-color: ${darkTheme.colors.main.mainBackground};
  --secondary-background-color: ${darkTheme.colors.main.secondaryBackground};
  --secondary-background-shade--5-color: ${shadeColor(darkTheme.colors.main.secondaryBackground, -5)};
  --spinner-base-color: ${darkTheme.colors.main.spinnerBase};
  --shadow-color: ${darkTheme.colors.shadow.color};
  --border-color: ${darkTheme.colors.border.main};

  --primary-rgb-color: ${hexToRGB(darkTheme.colors.main.primary)};
  --info-rgb-color: ${hexToRGB(darkTheme.colors.main.primary)};
  --secondary-color: ${hexToRGB(darkTheme.colors.main.secondary)};
  --error-rgb-color: ${hexToRGB(darkTheme.colors.main.error)};
  --warning-rgb-color: ${hexToRGB(darkTheme.colors.main.warning)};
  --success-rgb-color: ${hexToRGB(darkTheme.colors.main.success)};
  --background-rgb-color: ${hexToRGB(darkTheme.colors.main.mainBackground)};

  --text-main-color: ${darkTheme.colors.text.main};
  --text-light-color: ${darkTheme.colors.text.light};
  --text-superLight-color: ${darkTheme.colors.text.superLight};
  --text-secondary-color: ${darkTheme.colors.text.secondary};
  --text-dark-color: ${darkTheme.colors.text.dark};

  --dashboard-map-background-color: ${darkTheme.colors.dashboardMap.background};
  --dashboard-map-dots-color: ${darkTheme.colors.dashboardMap.dotsColor};
  --dashboard-map-dots-hovered-color: ${darkTheme.colors.dashboardMap.dotsHoveredColor};
  --dashboard-map-marker-border-color: ${darkTheme.colors.dashboardMap.markerBorderColor};
  --dashboard-map-control-color: ${darkTheme.colors.dashboardMap.controlColor};
  --dashboard-map-control-background-color: ${darkTheme.colors.dashboardMap.controlBackgroundColor};
  --dashboard-map-control-disabled-background-color: ${darkTheme.colors.dashboardMap.controlDisabledBackgroundColor};

  --chart-tooltip-label-color: ${darkTheme.colors.charts.tooltipLabel};
  --chart-color1: ${darkTheme.colors.charts.color1};
  --chart-rgb-color1: ${hexToRGB(darkTheme.colors.charts.color1)};
  --chart-color1-tint: ${darkTheme.colors.charts.color1Tint};
  --chart-color2: ${darkTheme.colors.charts.color2};
  --chart-color2-tint: ${darkTheme.colors.charts.color2Tint};
  --chart-color3: ${darkTheme.colors.charts.color3};
  --chart-color3-tint: ${darkTheme.colors.charts.color3Tint};
  --chart-color4: ${darkTheme.colors.charts.color4};
  --chart-color4-tint: ${darkTheme.colors.charts.color4Tint};
  --chart-color5: ${darkTheme.colors.charts.color5};
  --chart-rgb-color5: ${hexToRGB(darkTheme.colors.charts.color5)};
  --chart-color5-tint: ${darkTheme.colors.charts.color5Tint};

  --notification-success-color: ${darkTheme.colors.notifications.success};
  --notification-primary-color: ${darkTheme.colors.notifications.primary};
  --notification-warning-color: ${darkTheme.colors.notifications.warning};
  --notification-error-color: ${darkTheme.colors.notifications.error};

  --box-shadow: ${darkTheme.boxShadow.main};
  --box-shadow-hover: ${darkTheme.boxShadow.hover};
`;
