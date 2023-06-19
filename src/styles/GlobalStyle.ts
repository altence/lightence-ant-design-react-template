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
      color: var(--ant-primary-color-hover);
    }
  }

  .ant-notification {
    .ant-notification-notice {
      min-height: 6rem;
      padding: 2rem;
    }

    .ant-notification-notice-success {
      border: 1px solid var(--success-color);
      background: var(--notification-success-color);
    }

    .ant-notification-notice-info {
      border: 1px solid var(--primary-color);
      background: var(--notification-primary-color);
    }

    .ant-notification-notice-warning {
      border: 1px solid var(--warning-color);
      background: var(--notification-warning-color);
    }

    .ant-notification-notice-error {
      border: 1px solid var(--error-color);
      background: var(--notification-error-color);
    }
  }
`;
