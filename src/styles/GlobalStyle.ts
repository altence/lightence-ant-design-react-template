import { createGlobalStyle } from 'styled-components';
import { resetCss } from './resetCss';
import { commonColors, fontCss, basicCss, layoutCss } from './themes/constants';
import { darkColors } from './themes/dark/darkColors';
import { lightColors } from './themes/light/lightColors';
import { media } from './themes/light/lightTheme';

export default createGlobalStyle`

  ${resetCss}

  [data-theme='light'],
  :root {
    ${lightColors}
  }

  [data-theme='dark'],
  :root {
    ${darkColors}
  }

  :root {
    ${commonColors}
    ${fontCss}
    ${layoutCss}
    ${basicCss}
  }
  
  
  .range-picker {
    & .ant-picker-panels {
      @media only screen and ${(props) =>
        `${props.theme.media.xs} and (max-width: ${props.theme.breakpoints.md - 0.02}px)`} {
        display: flex;
      flex-direction: column;
      }
    }
  }

  .search-dropdown {
    box-shadow: var(--box-shadow);

    @media only screen and ${(props) =>
      `${props.theme.media.xs} and (max-width: ${props.theme.breakpoints.md - 0.02}px)`} {
      width: calc(100vw - 16px);
    max-width: 600px;
    }

    @media only screen and ${media.md} {
      max-width: 323px;
    }
  }
  
  .d-none {
    display: none;
  }

  .ant-picker-cell {
    color: var(--text-main-color);
  }

  .ant-picker-cell-in-view .ant-picker-calendar-date-value {
    color: var(--text-main-color);
    font-weight: var(--font-weight-bold);
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
      margin-left: 0
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
      .ant-notification-notice-with-icon .ant-notification-notice-description  {
        margin-top: 0.625rem;
      }
    }
    
    .title {
      font-size: var(--font-size-xxl);
      height: 3rem;
      margin-left: 1.5rem;
      display: flex;
      align-items: center;
      font-weight: var(--font-weight-bold);

      &.title-only {
        color: var(--text-main-color);
        font-size: var(--font-size-md);
        height: 2rem;
        line-height: 2rem;
        margin-left: 0.75rem;
        font-weight: var(--font-weight-semibold);
      }
  }
  
    .description {
      color: #404040;
      font-size: var(--font-size-md);
      font-weight: var(--font-weight-semibold);
      line-height: 1.375rem;
    }
  
    &.ant-notification-notice-success {
      border: 1px solid var(--success-color);
      background: ${(props) => props.theme.colors.notifications.success};
      
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
  
  .ant-menu-inline, .ant-menu-vertical {
    border-right: 0;
  }
  // notifications end
`;
