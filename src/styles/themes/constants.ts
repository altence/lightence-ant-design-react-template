import { graphic } from 'echarts';
import { css } from 'styled-components';
import lightTheme from './light/lightTheme';

export const commonColors = css`
  --white: ${lightTheme.commonColors.white};
  --black: ${lightTheme.commonColors.black};
  --green: ${lightTheme.commonColors.green};
  --orange: ${lightTheme.commonColors.orange};
  --gray: ${lightTheme.commonColors.gray};
  --lightgrey: ${lightTheme.commonColors.lightgrey};
  --violet: ${lightTheme.commonColors.violet};
  --lightgreen: ${lightTheme.commonColors.lightgreen};
  --pink: ${lightTheme.commonColors.pink};
  --blue: ${lightTheme.commonColors.blue};
  --skyblue: ${lightTheme.commonColors.skyblue};
  --red: ${lightTheme.commonColors.red};
`;

export const layoutCss = css`
  --mobile-padding-vertical: 0.75rem;
  --mobile-padding-horizontal: 1rem;
  --mobile-header-height: 4.25rem;
  --mobile-header-padding: 1rem;
  --desktop-padding-vertical: 1.25rem;
  --desktop-padding-horizontal: 2.25rem;
  --desktop-header-height: 5.625rem;
`;

export const fontCss = css`
  --font-size-xxs: 0.75rem;
  --font-size-xs: 0.875rem;
  --font-size-md: 1rem;
  --font-size-lg: 1.125rem;
  --font-size-xl: 1.25rem;
  --font-size-xxl: 1.5rem;
  --font-size-xxxl: 1.625rem;
  --font-size-xxxxl: 2rem;
  --font-weight-thin: 100;
  --font-weight-extraLight: 200;
  --font-weight-light: 300;
  --font-weight-regular: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;
  --font-weight-extraBold: 800;
  --font-weight-black: 900;
`;

export const basicCss = css`
  --border-radius: 7px;
`;

export const chartColors = {
  dark: {
    chartPrimaryGradient: new graphic.LinearGradient(0, 0, 0, 1, [
      {
        offset: 0,
        color: '#7568f6',
      },
      {
        offset: 1,
        color: 'rgba(193, 225, 255, 0)',
      },
    ]),
    chartSecondaryGradient: new graphic.LinearGradient(0, 0, 0, 1, [
      {
        offset: 0,
        color: '#a42218',
      },
      {
        offset: 1,
        color: 'rgba(255, 255, 255, 0)',
      },
    ]),
    chartAdditionalGradient: new graphic.LinearGradient(0, 0, 0, 1, [
      {
        offset: 0,
        color: '#306955',
      },
      {
        offset: 1,
        color: 'rgba(255, 255, 255, 0)',
      },
    ]),
  },
  light: {
    chartPrimaryGradient: new graphic.LinearGradient(0, 0, 0, 1, [
      {
        offset: 0,
        color: 'rgba(0, 110, 211, 0.95)',
      },
      {
        offset: 1,
        color: 'rgba(193, 225, 255, 0.2)',
      },
    ]),
    chartSecondaryGradient: new graphic.LinearGradient(0, 0, 0, 1, [
      {
        offset: 0,
        color: 'rgba(255, 82, 82, 0.5)',
      },
      {
        offset: 1,
        color: 'rgba(255, 255, 255, 0)',
      },
    ]),
    chartAdditionalGradient: new graphic.LinearGradient(0, 0, 0, 1, [
      {
        offset: 0,
        color: 'rgba(11, 156, 49, 0.9)',
      },
      {
        offset: 1,
        color: 'rgba(255, 255, 255, 0)',
      },
    ]),
  },
};
