import { createGlobalStyle } from 'styled-components';
import { resetCss } from './resetCss';
import { BREAKPOINTS, FONT_SIZE, FONT_WEIGHT, media } from './themes/constants';
import {
  lightThemeVariables,
  darkThemeVariables,
  commonThemeVariables,
  antOverrideCssVariables,
} from './themes/themeVariables';

const styled = { createGlobalStyle }; // https://github.com/prettier/prettier/issues/11196#issuecomment-951878725

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

  .ant-input:hover,
  .ant-input-affix-wrapper:not(.ant-input-affix-wrapper-disabled):hover {
    border-color: var(--ant-primary-5);
  }

  .ant-input:focus {
    box-shadow: 0 0 0 2px var(--ant-primary-color-outline);
  }

  .ant-modal-confirm-success,
  .ant-modal-confirm-info,
  .ant-modal-confirm-warning,
  .ant-modal-confirm-error {
    .ant-modal-content {
      background-color: var(--background-color);

      .ant-modal-confirm-title {
        color: var(--heading-color);
        font-size: ${FONT_SIZE.lg};
      }

      .ant-modal-confirm-content {
        color: var(--text-main-color);
        font-size: ${FONT_SIZE.md};
      }

      .ant-modal-confirm-btns {
        .ant-btn.ant-btn-primary {
          font-size: ${FONT_SIZE.md};
          font-weight: ${FONT_WEIGHT.semibold};
          background-color: var(--ant-primary-color);
          border-color: var(--ant-primary-color);
          height: 50px;
        }
      }
    }
  }

  .ant-picker-dropdown {
    .ant-picker-cell-in-view.ant-picker-cell-range-hover-start:not(.ant-picker-cell-in-range):not(
        .ant-picker-cell-range-start
      ):not(.ant-picker-cell-range-end)::after,
    .ant-picker-cell-in-view.ant-picker-cell-range-hover-end:not(.ant-picker-cell-in-range):not(
        .ant-picker-cell-range-start
      ):not(.ant-picker-cell-range-end)::after,
    .ant-picker-cell-in-view.ant-picker-cell-range-hover-start.ant-picker-cell-range-start-single::after,
    .ant-picker-cell-in-view.ant-picker-cell-range-hover-start.ant-picker-cell-range-start.ant-picker-cell-range-end.ant-picker-cell-range-end-near-hover::after,
    .ant-picker-cell-in-view.ant-picker-cell-range-hover-end.ant-picker-cell-range-start.ant-picker-cell-range-end.ant-picker-cell-range-start-near-hover::after,
    .ant-picker-cell-in-view.ant-picker-cell-range-hover-end.ant-picker-cell-range-end-single::after,
    .ant-picker-cell-in-view.ant-picker-cell-range-hover:not(.ant-picker-cell-in-range)::after {
      border-color: var(--ant-primary-5);
      border-inline-color: var(--ant-primary-5);
    }

    .ant-picker-cell-in-view.ant-picker-cell-in-range.ant-picker-cell-range-hover::before,
    .ant-picker-cell-in-view.ant-picker-cell-in-range.ant-picker-cell-range-hover-start::before,
    .ant-picker-cell-in-view.ant-picker-cell-in-range.ant-picker-cell-range-hover-end::before,
    .ant-picker-cell-in-view.ant-picker-cell-range-start.ant-picker-cell-range-hover::before,
    .ant-picker-cell-in-view.ant-picker-cell-range-end.ant-picker-cell-range-hover::before,
    .ant-picker-cell-in-view.ant-picker-cell-range-start:not(
        .ant-picker-cell-range-start-single
      ).ant-picker-cell-range-hover-start::before,
    .ant-picker-cell-in-view.ant-picker-cell-range-end:not(
        .ant-picker-cell-range-end-single
      ).ant-picker-cell-range-hover-end::before,
    .ant-picker-panel
      > :not(.ant-picker-date-panel)
      .ant-picker-dropdown
      .ant-picker-cell-in-view.ant-picker-cell-in-range.ant-picker-cell-range-hover-start::before,
    .ant-picker-panel
      > :not(.ant-picker-date-panel)
      .ant-picker-dropdown
      .ant-picker-cell-in-view.ant-picker-cell-in-range.ant-picker-cell-range-hover-end::before {
      background-color: var(--ant-primary-5);
    }

    .ant-picker-cell-in-view.ant-picker-cell-in-range.ant-picker-cell-range-hover::before,
    .ant-picker-cell-in-view.ant-picker-cell-in-range.ant-picker-cell-range-hover-start::before,
    .ant-picker-cell-in-view.ant-picker-cell-in-range.ant-picker-cell-range-hover-end::before,
    .ant-picker-cell-in-view.ant-picker-cell-range-start.ant-picker-cell-range-hover::before,
    .ant-picker-cell-in-view.ant-picker-cell-range-end.ant-picker-cell-range-hover::before,
    .ant-picker-cell-in-view.ant-picker-cell-range-start:not(
        .ant-picker-cell-range-start-single
      ).ant-picker-cell-range-hover-start::before,
    .ant-picker-cell-in-view.ant-picker-cell-range-end:not(
        .ant-picker-cell-range-end-single
      ).ant-picker-cell-range-hover-end::before,
    .ant-picker-panel
      > :not(.ant-picker-date-panel)
      .ant-picker-dropdown
      .ant-picker-cell-in-view.ant-picker-cell-in-range.ant-picker-cell-range-hover-start::before,
    .ant-picker-panel
      > :not(.ant-picker-date-panel)
      .ant-picker-dropdown
      .ant-picker-cell-in-view.ant-picker-cell-in-range.ant-picker-cell-range-hover-end::before {
      background-color: var(--ant-primary-5);
    }

    .ant-picker-date-panel {
      .ant-picker-cell-in-view.ant-picker-cell-in-range.ant-picker-cell-range-hover-start,
      .ant-picker-cell-in-view.ant-picker-cell-in-range.ant-picker-cell-range-hover-end {
        .ant-picker-cell-inner::after {
          background-color: var(--ant-primary-5);
        }
      }
    }
  }

  .ant-breadcrumb {
    li:last-child {
      .ant-breadcrumb-link {
        color: var(--text-main-color);
      }
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

    .title {
      font-size: ${FONT_SIZE.xxl};
      height: 3rem;
      margin-left: 1.5rem;
      display: flex;
      align-items: center;
      font-weight: ${FONT_WEIGHT.bold};

      &.title-only {
        color: var(--text-main-color);
        font-size: ${FONT_SIZE.md};
        height: 2rem;
        line-height: 2rem;
        margin-left: 0.75rem;
        font-weight: ${FONT_WEIGHT.semibold};
      }
    }

    .description {
      color: #404040;
      font-size: ${FONT_SIZE.md};
      font-weight: ${FONT_WEIGHT.semibold};
      line-height: 1.375rem;
    }

    &.ant-notification-notice-success {
      border: 1px solid var(--success-color);
      background: var(--notification-success-color);

      .title {
        color: var(--success-color);
      }
    }

    &.ant-notification-notice-info {
      border: 1px solid var(--primary-color);
      background: var(--notification-primary-color);

      .title {
        color: var(--primary-color);
      }
    }

    &.ant-notification-notice-warning {
      border: 1px solid var(--warning-color);
      background: var(--notification-warning-color);

      .title {
        color: var(--warning-color);
      }
    }

    &.ant-notification-notice-error {
      border: 1px solid var(--error-color);
      background: var(--notification-error-color);

      .title {
        color: var(--error-color);
      }
    }

    .success-icon {
      color: var(--success-color);
    }

    .info-icon {
      color: var(--primary-color);
    }

    .warning-icon {
      color: var(--warning-color);
    }

    .error-icon {
      color: var(--error-color);
    }
  }

  .ant-menu-inline,
  .ant-menu-vertical {
    border-right: 0;
  }
  // notifications end
`;
