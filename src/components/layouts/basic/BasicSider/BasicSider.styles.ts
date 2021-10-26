import styled, { css } from 'styled-components';
import { Layout } from 'antd';

interface CollapseProps {
  isCollapsed: boolean;
}

export const Sider = styled(Layout.Sider)`
  position: fixed;
  overflow: scroll;
  right: 0;
  z-index: 5;
  height: 100%;

  color: ${(props) => props.theme.colors.text.secondary};

  @media only screen and ${(props) => props.theme.media.md} {
    right: unset;
    left: 0;
  }

  @media only screen and ${(props) => props.theme.media.xl} {
    position: unset;
    overflow: unset;
    height: unset;
  }
`;

export const CollapseWrapper = styled.div<CollapseProps>`
  padding: 1rem 0.5rem;
  margin-bottom: 2rem;
  min-height: 3.75rem;

  & > button {
    @media only screen and ${(props) => props.theme.media.md} {
      position: absolute;
      transition: all 0.3s ease;
      right: 0;

      ${(props) =>
        props.isCollapsed &&
        css`
          transform: translateX(50%);
          right: 50%;
        `};
    }

    color: ${(props) => props.theme.colors.text.secondary};

    &:hover {
      color: ${(props) => props.theme.colors.text.secondary};
    }

    &:focus {
      color: ${(props) => props.theme.colors.text.secondary};
    }
  }
`;

export const SiderContent = styled.div`
  padding: 0.75rem 1rem;

  @media only screen and ${(props) => props.theme.media.md} {
    padding: 1.5rem 0;
  }

  @media only screen and ${(props) => props.theme.media.xl} {
    padding: 6.25rem 0;
  }
`;
