import * as styled from 'styled-components';
import { resetCss } from './resetCss';
import { BREAKPOINTS, FONT_WEIGHT, media } from './themes/constants';
import {
  lightThemeVariables,
  darkThemeVariables,
  commonThemeVariables,
  antOverrideCssVariables,
} from './themes/themeVariables';

export default styled.createGlobalStyle`
  ${resetCss}

  [data-theme='light'],
  :root {
    ${lightThemeVariables}
  }

  [data-theme='dark'] {
    ${darkThemeVariables}
  }

  :root {
    ${commonThemeVariables};
    ${antOverrideCssVariables};
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

  // notifications start
  .ant-notification-notice {
    width: 36rem;
    padding: 2rem;
    min-height: 6rem;

    .ant-notification-notice-with-icon .ant-notification-notice-message {
      margin-bottom: 0;
      margin-left: 2.8125rem;
    }

    .ant-notification-notice-with-icon .ant-notification-notice-description {
      margin-left: 4.375rem;
      margin-top: 0;
    }

    .ant-notification-notice-icon {
      font-size: 2.8125rem;
      margin-left: 0;
    }

    .ant-notification-notice-close {
      top: 1.25rem;
      right: 1.25rem;
    }

    .ant-notification-notice-close-x {
      display: flex;
      font-size: 0.9375rem;
    }

    .notification-without-description {
      .ant-notification-notice-close {
        top: 1.875rem;
      }
      .ant-notification-notice-with-icon .ant-notification-notice-description {
        margin-top: 0.625rem;
      }
    }

    &.ant-notification-notice-success {
      border: 1px solid var(--success-color);
      background: var(--notification-success-color);
    }

    &.ant-notification-notice-info {
      border: 1px solid var(--primary-color);
      background: var(--notification-primary-color);
    }

    &.ant-notification-notice-warning {
      border: 1px solid var(--warning-color);
      background: var(--notification-warning-color);
    }

    &.ant-notification-notice-error {
      border: 1px solid var(--error-color);
      background: var(--notification-error-color);
    }
  }

  .ant-menu-inline,
  .ant-menu-vertical {
    border-right: 0;
  }
  // notifications end
`;
