import { Layout } from 'antd';
import styled, { css } from 'styled-components';
import bg from '@app/assets/images/bg.png';

interface HeaderProps {
  $isHidden: boolean;
  $isScrollDown: boolean;
}

export const Header = styled(Layout.Header)<HeaderProps>`
  line-height: 1.5;

  // TODO fix in scope of AT-154
  @media only screen and ${(props) =>
      `${props.theme.media.xs} and (max-width: ${props.theme.breakpoints.md - 0.02}px)`} {
    top: 0;
    width: 100%;
    z-index: 3;
    background: url(${bg}) no-repeat;
    position: sticky;
    transition: transform 0.3s ease, opacity 0.3s ease;

    ${(props) =>
      props.$isHidden &&
      css`
        opacity: 0;
        transform: translateY(-100%);
      `}

    ${(props) =>
      !props.$isScrollDown &&
      css`
        transform: translateY(0);
        opacity: 1;
      `}
  }

  @media only screen and ${(props) => props.theme.media.md} {
    padding: ${(props) =>
      `${props.theme.desktopLayout.paddingVertical} ${props.theme.desktopLayout.paddingHorizontal}`};

    height: ${(props) => props.theme.desktopLayout.headerHeight};
  }
`;
