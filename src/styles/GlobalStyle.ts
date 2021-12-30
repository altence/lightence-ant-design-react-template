import { createGlobalStyle } from 'styled-components';
import theme from './theme';

export default createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-weight: 500;
  }
  
  img {
    display: block;
  }

  .range-picker {
    & .ant-picker-panels {
      @media only screen and ${theme.media.xs} and (max-width: ${theme.breakpoints.md - 0.02}px) {
        display: flex;
      flex-direction: column;
      }
    }
  }

  .search-dropdown {
    @media only screen and ${theme.media.xs} and (max-width: ${theme.breakpoints.md - 0.02}px) {
      width: calc(100vw - 16px);
    max-width: 600px;
    }

    @media only screen and ${theme.media.md} {
      max-width: 323px;
    }
  }
  
  .d-none {
    display: none;
  }

  .ant-notification-notice {
    width: 35.3125rem
  }

  .ant-notification-notice-with-icon .ant-notification-notice-message {
    margin-bottom: 0;
    margin-left: 2.8125rem;
  }

  .ant-notification-notice-with-icon .ant-notification-notice-description {
    margin-left: 4.375rem;
    margin-top: 0.625rem;
  }

  .ant-notification-notice-icon {
    font-size: 2.8125rem;
    margin-left: 0
  }
`;
