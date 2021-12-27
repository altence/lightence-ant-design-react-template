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
    padding: 2.1875rem 3.125rem 2.5rem 3.125rem;
    width: 35.3125rem
  }

  .ant-notification-notice-with-icon .ant-notification-notice-message {
    margin-left: 4.375rem;
    padding-top: 0.3125rem;
    margin-bottom: 1.25rem;
  }

  .ant-notification-notice-with-icon .ant-notification-notice-description {
    margin-left: 4.375rem;
  }

  .ant-notification-notice-icon {
    font-size: 2.8125rem;
    margin-left: 0
  }
`;
