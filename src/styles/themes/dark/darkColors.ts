import { css } from 'styled-components';
import { darkTheme } from './darkTheme';

export const darkColors = css`
  color-scheme: dark;
  color-scheme: light;
  --primary-color: ${darkTheme.colors.main.primary};
  --primary-gradient-color: ${darkTheme.colors.main.primaryGradient};
  --secondary-color: ${darkTheme.colors.main.secondary};
  --error-color: ${darkTheme.colors.main.error};
  --warning-color: ${darkTheme.colors.main.warning};
  --success-color: ${darkTheme.colors.main.success};
  --angular-gradient-color: ${darkTheme.colors.main.angularGradient};
  --main-background-color: ${darkTheme.colors.main.mainBackground};
  --secondary-background-color: ${darkTheme.colors.main.secondaryBackground};
  --spinner-base-color: ${darkTheme.colors.main.spinnerBase};
  --shadow-color: ${darkTheme.colors.shadow.color};
  --border-color: ${darkTheme.colors.border.main};

  // text
  --text-main-color: ${darkTheme.colors.text.main};
  --text-light-color: ${darkTheme.colors.text.light};
  --text-superLight-color: ${darkTheme.colors.text.superLight};
  --text-secondary-color: ${darkTheme.colors.text.secondary};
  --text-dark-color: ${darkTheme.colors.text.dark};

  // dashboard map
  --dashboard-map-background-color: ${darkTheme.colors.dashboardMap.background};
  --dashboard-map-dots-color: ${darkTheme.colors.dashboardMap.dotsColor};
  //TODO use primary
  --dashboard-map-dots-hovered-color: ${darkTheme.colors.dashboardMap.dotsHoveredColor};
  --dashboard-map-marker-border-color: ${darkTheme.colors.dashboardMap.markerBorderColor};
  --dashboard-map-control-color: ${darkTheme.colors.dashboardMap.controlColor};
  --dashboard-map-control-background-color: ${darkTheme.colors.dashboardMap.controlBackgroundColor};
  --dashboard-map-control-disabled-background-color: ${darkTheme.colors.dashboardMap.controlDisabledBackgroundColor};

  // charts
  --chart-tooltip-label-color: ${darkTheme.colors.charts.tooltipLabel};
  --chart-color1: ${darkTheme.colors.charts.color1};
  --chart-color1-tint: ${darkTheme.colors.charts.color1Tint};
  --chart-color2: ${darkTheme.colors.charts.color2};
  --chart-color2-tint: ${darkTheme.colors.charts.color2Tint};
  --chart-color3: ${darkTheme.colors.charts.color3};
  --chart-color3-tint: ${darkTheme.colors.charts.color3Tint};
  --chart-color4: ${darkTheme.colors.charts.color4};
  --chart-color4-tint: ${darkTheme.colors.charts.color4Tint};
  --chart-color5: ${darkTheme.colors.charts.color5};
  --chart-color5-tint: ${darkTheme.colors.charts.color5Tint};

  //notifications
  --notification-success-color: ${darkTheme.colors.notifications.success};
  --notification-primary-color: ${darkTheme.colors.notifications.primary};
  --notification-warning-color: ${darkTheme.colors.notifications.warning};
  --notification-error-color: ${darkTheme.colors.notifications.error};

  //box shadow
  --box-shadow-color: ${darkTheme.boxShadow.main};
  --box-shadow-hover-color: ${darkTheme.boxShadow.hover};
`;
