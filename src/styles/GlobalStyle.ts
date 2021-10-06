import { createGlobalStyle } from 'styled-components';
import theme from './theme';

export default createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }



  .range-picker {
    & .ant-picker-panels {
      @media only screen and ${theme.media.xs} and (max-width: ${theme.breakpoints.md - 1}px) {
        display: flex;
      flex-direction: column;
      }
    }
  }
`;
