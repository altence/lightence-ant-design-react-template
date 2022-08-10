import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  ::-webkit-scrollbar {
    width: 1rem;
  }
  ::-webkit-scrollbar-track {
    background-color: transparent;
  }
  ::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.commonColors.lightgrey};
    border-radius: 1.25rem;
    border: 0.375rem solid transparent;
    background-clip: content-box;
  }

  body {
    font-weight: 500;
  }
  
  img {
    display: block;
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
    box-shadow: ${(props) => props.theme.boxShadow.main};

    @media only screen and ${(props) =>
      `${props.theme.media.xs} and (max-width: ${props.theme.breakpoints.md - 0.02}px)`} {
      width: calc(100vw - 16px);
    max-width: 600px;
    }

    @media only screen and ${(props) => props.theme.media.md} {
      max-width: 323px;
    }
  }
  
  .d-none {
    display: none;
  }

  .ant-picker-cell {
    color: ${(props) => props.theme.colors.text.main};
  }

  .ant-picker-cell-in-view .ant-picker-calendar-date-value {
    color: ${(props) => props.theme.colors.text.main};
    font-weight: ${(props) => props.theme.commonFontWeight.bold};
  }

  .ant-picker svg {
    color: ${(props) => props.theme.colors.text.light};
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
      font-size: ${(props) => props.theme.commonFontSizes.xxl};
      height: 3rem;
      margin-left: 1.5rem;
      display: flex;
      align-items: center;
      font-weight: ${(props) => props.theme.commonFontWeight.bold};

      &.title-only {
        color: ${(props) => props.theme.colors.text.main};
        font-size: ${(props) => props.theme.commonFontSizes.md};
        height: 2rem;
        line-height: 2rem;
        margin-left: 0.75rem;
        font-weight: ${(props) => props.theme.commonFontWeight.semibold};
      }
  }
  
    .description {
      color: #404040;
      font-size: ${(props) => props.theme.commonFontSizes.md};
      font-weight: ${(props) => props.theme.commonFontWeight.semibold};
      line-height: 1.375rem;
    }
  
    &.ant-notification-notice-success {
      border: ${(props) => `1px solid ${props.theme.colors.main.success}`};
      background: ${(props) => props.theme.colors.notifications.success};
      
      .title {
        color: ${(props) => props.theme.colors.main.success};
      }
    }
  
    &.ant-notification-notice-info {
      border: ${(props) => `1px solid ${props.theme.colors.main.primary}`};
      background: ${(props) => props.theme.colors.notifications.primary};
  
      .title {
        color: ${(props) => props.theme.colors.main.primary};
      }
    }
  
    &.ant-notification-notice-warning {
      border: ${(props) => `1px solid ${props.theme.colors.main.warning}`};
      background: ${(props) => props.theme.colors.notifications.warning};
  
      .title {
        color: ${(props) => props.theme.colors.main.warning};
      }
    }
  
    &.ant-notification-notice-error {
      border: ${(props) => `1px solid ${props.theme.colors.main.error}`};
      background: ${(props) => props.theme.colors.notifications.error};
  
      .title {
        color: ${(props) => props.theme.colors.main.error};
      }
    }
  
    .success-icon {
      color: ${(props) => props.theme.colors.main.success};
    }
  
    .info-icon {
      color: ${(props) => props.theme.colors.main.primary};
    }
  
    .warning-icon {
      color: ${(props) => props.theme.colors.main.warning};
    }
  
    .error-icon {
      color: ${(props) => props.theme.colors.main.error};
    }
  }
  
  .ant-menu-inline, .ant-menu-vertical {
    border-right: 0;
  }
  // notifications end
`;
