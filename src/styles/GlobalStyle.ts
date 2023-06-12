import * as styled from 'styled-components';
import { resetCss } from './resetCss';
import { BREAKPOINTS, FONT_WEIGHT, media } from './themes/constants';
import { getThemeVariables, commonThemeVariables } from './themes/themeVariables';

export default styled.createGlobalStyle`
  ${resetCss}

  [data-theme='light'],
  :root {
    ${getThemeVariables('light')}
  }

  [data-theme='dark'] {
    ${getThemeVariables('dark')}
  }

  :root {
    ${commonThemeVariables};
  }

  [data-no-transition] * {
    transition: none !important;
  }

  .range-picker {
    & .ant-picker-panels {
      @media only screen and ${media.xs} and (max-width: ${BREAKPOINTS.md - 0.02}px) {
        display: flex;
        flex-direction: column;
      }
    }
  }

  .search-overlay {
    box-shadow: var(--box-shadow);

    @media only screen and ${media.xs} and (max-width: ${BREAKPOINTS.md - 0.02}px) {
      width: calc(100vw - 16px);
      max-width: 600px;
    }

    @media only screen and ${media.md} {
      width: 323px;
    }
  }

  a {
    color: var(--primary-color);

    &:hover,
    :active {
      color: var(--ant-primary-color-hover);
    }
  }

  .ant-picker-cell {
    color: var(--text-main-color);
  }

  .ant-picker-cell-in-view .ant-picker-calendar-date-value {
    color: var(--text-main-color);
    font-weight: ${FONT_WEIGHT.bold};
  }

  .ant-picker svg {
    color: var(--text-light-color);
  }

  .ant-notification {
    .ant-notification-notice {
      min-height: 6rem;

      .ant-notification-notice-close {
        top: 1.25rem;
        right: 1.25rem;
      }
    }

    .ant-notification-notice-success {
      border: 1px solid var(--success-color);
      background: var(--notification-success-color);
    }

    .ant-notification-notice-info {
      border: 1px solid var(--primary-color);
      background: var(--notification-primary-color);
    }

    .ant-notification-notice-warning {
      border: 1px solid var(--warning-color);
      background: var(--notification-warning-color);
    }

    .ant-notification-notice-error {
      border: 1px solid var(--error-color);
      background: var(--notification-error-color);
    }
  }

  .ant-menu-inline,
  .ant-menu-vertical {
    border-right: 0;
  }
`;
