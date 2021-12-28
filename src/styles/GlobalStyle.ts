import { createGlobalStyle } from 'styled-components';

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

  &::-webkit-scrollbar {
    width: 1rem;
  }
  &::-webkit-scrollbar-track {
    background-color: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.commonColors.lightgrey};
    border-radius: 1.25rem;
    border: 0.375rem solid transparent;
    background-clip: content-box;
  }

  .range-picker {
    & .ant-picker-panels {
      @media only screen and ${(props) =>
        `${props.theme.media.xs} and (max-width: ${
          props.theme.breakpoints.md - 0.02
        }px)`}  { // Browsers don't currently support range queries. See https://getbootstrap.com/docs/5.0/layout/breakpoints/#max-width
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
`;
