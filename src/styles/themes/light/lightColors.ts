import { hexToRGB, shadeColor } from '@app/utils/utils';
import { css } from 'styled-components';
import lightTheme from './lightTheme';

export const lightColors = css`
  color-scheme: light;
  --primary-color: ${lightTheme.colors.main.primary};
  --primary-gradient-color: ${lightTheme.colors.main.primaryGradient};
  --info-color: var(--primary-color);
  --secondary-color: ${lightTheme.colors.main.secondary};
  --error-color: ${lightTheme.colors.main.error};
  --warning-color: ${lightTheme.colors.main.warning};
  --success-color: ${lightTheme.colors.main.success};
  --angular-gradient-color: ${lightTheme.colors.main.angularGradient};
  --background-color: ${lightTheme.colors.main.mainBackground};
  --secondary-background-color: ${lightTheme.colors.main.secondaryBackground};
  --secondary-background-shade--5-color: ${shadeColor(lightTheme.colors.main.secondaryBackground, -5)};
  --spinner-base-color: ${lightTheme.colors.main.spinnerBase};
  --shadow-color: ${lightTheme.colors.shadow.color};
  --border-color: ${lightTheme.colors.border.main};

  --primary-rgb-color: ${hexToRGB(lightTheme.colors.main.primary)};
  --info-rgb-color: ${hexToRGB(lightTheme.colors.main.primary)};
  --secondary-color: ${hexToRGB(lightTheme.colors.main.secondary)};
  --error-rgb-color: ${hexToRGB(lightTheme.colors.main.error)};
  --warning-rgb-color: ${hexToRGB(lightTheme.colors.main.warning)};
  --success-rgb-color: ${hexToRGB(lightTheme.colors.main.success)};
  --background-rgb-color: ${hexToRGB(lightTheme.colors.main.mainBackground)};

  --text-main-color: ${lightTheme.colors.text.main};
  --text-light-color: ${lightTheme.colors.text.light};
  --text-superLight-color: ${lightTheme.colors.text.superLight};
  --text-secondary-color: ${lightTheme.colors.text.secondary};
  --text-dark-color: ${lightTheme.colors.text.dark};

  --dashboard-map-background-color: ${lightTheme.colors.dashboardMap.background};
  --dashboard-map-dots-color: ${lightTheme.colors.dashboardMap.dotsColor};
  --dashboard-map-dots-hovered-color: ${lightTheme.colors.dashboardMap.dotsHoveredColor};
  --dashboard-map-marker-border-color: ${lightTheme.colors.dashboardMap.markerBorderColor};
  --dashboard-map-control-color: ${lightTheme.colors.dashboardMap.controlColor};
  --dashboard-map-control-background-color: ${lightTheme.colors.dashboardMap.controlBackgroundColor};
  --dashboard-map-control-disabled-background-color: ${lightTheme.colors.dashboardMap.controlDisabledBackgroundColor};

  --chart-tooltip-label-color: ${lightTheme.colors.charts.tooltipLabel};
  --chart-color1: ${lightTheme.colors.charts.color1};
  --chart-rgb-color1: ${hexToRGB(lightTheme.colors.charts.color1)};
  --chart-color1-tint: ${lightTheme.colors.charts.color1Tint};
  --chart-color2: ${lightTheme.colors.charts.color2};
  --chart-color2-tint: ${lightTheme.colors.charts.color2Tint};
  --chart-color3: ${lightTheme.colors.charts.color3};
  --chart-color3-tint: ${lightTheme.colors.charts.color3Tint};
  --chart-color4: ${lightTheme.colors.charts.color4};
  --chart-color4-tint: ${lightTheme.colors.charts.color4Tint};
  --chart-color5: ${lightTheme.colors.charts.color5};
  --chart-rgb-color5: ${hexToRGB(lightTheme.colors.charts.color5)};
  --chart-color5-tint: ${lightTheme.colors.charts.color5Tint};

  --notification-success-color: ${lightTheme.colors.notifications.success};
  --notification-primary-color: ${lightTheme.colors.notifications.primary};
  --notification-warning-color: ${lightTheme.colors.notifications.warning};
  --notification-error-color: ${lightTheme.colors.notifications.error};

  --box-shadow: ${lightTheme.boxShadow.main};
  --box-shadow-hover: ${lightTheme.boxShadow.hover};
`;
