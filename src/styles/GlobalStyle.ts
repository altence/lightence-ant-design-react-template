import * as styled from 'styled-components';
import { resetCss } from './resetCss';
import { FONT_FAMILY } from './themes/constants';
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

  button,
  input {
    font-family: ${FONT_FAMILY.main}, sans-serif;
  }

  a {
    color: var(--primary-color);

    &:hover,
    :active {
      color: var(--ant-primary-5);
    }
  }
`;
