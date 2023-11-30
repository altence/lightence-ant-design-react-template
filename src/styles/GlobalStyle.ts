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

  .ant-menu-vertical {
    .ant-menu-item {
      .ant-menu-title-content {
        a {
          font-size: ${({ theme }) => theme.fontSizes.md};
          color: ${({ theme }) => theme.textMain};
      
          &:hover,
          :active {
            color: ${({ theme }) => theme.primary6};
          }
        }
      }
    }
    .ant-menu-item-selected {
      .ant-menu-title-content {
        a {
          color: inherit;
        }
      }
    }
  }

  .ant-tooltip {
    .ant-tooltip-content {
      .ant-tooltip-inner {
        min-width: 30px;
        min-height: 32px;
        font-size: ${({ theme }) => theme.fontSizes.md};
      }
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
