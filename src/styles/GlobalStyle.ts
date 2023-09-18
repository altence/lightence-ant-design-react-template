import * as styled from 'styled-components';
import { resetCss } from './resetCss';
import { colorTypeFrom } from '@app/utils/utils';

export default styled.createGlobalStyle`
  ${resetCss}

  :root {
    color-scheme: light dark;
  }

  [data-no-transition] * {
    transition: none !important;
  }

  button,
  input {
    font-family: ${({ theme }) => theme.fontFamilies.main}, sans-serif;
  }

  a {
    color: ${({ theme }) => theme.primary};

    &:hover,
    :active {
      color: ${({ theme }) => theme.primary5};
    }
  }

  .ant-notification {
    ${({ theme }) =>
      (['info', 'success', 'warning', 'error'] as const).map(
        (notification) => styled.css`
          .ant-notification-notice-${notification} {
            border: 1px solid ${theme[colorTypeFrom(notification)]};
            background: ${theme.notification[colorTypeFrom(notification)]};
          }
        `,
      )}
  }
`;
