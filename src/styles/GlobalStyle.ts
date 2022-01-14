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

  .ant-notification-notice {
    width: 35.3125rem
  }

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

  .ant-picker-cell {
    color: ${(props) => props.theme.colors.text.superLight};

    &:hover .ant-picker-cell-inner {
      background: ${(props) => props.theme.colors.main.secondaryBackground} !important;
    }
  }

  .ant-picker-cell-in-view {
    color: ${(props) => props.theme.colors.text.main};
  }

  .ant-picker svg {
    color: ${(props) => props.theme.colors.text.light};
  }
`;
