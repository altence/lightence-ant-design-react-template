import styled from 'styled-components';
import { Button, Layout } from 'antd';
import { Link } from 'react-router-dom';

export const Sider = styled(Layout.Sider)`
  position: fixed;
  overflow-y: auto;
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

export const CollapseButton = styled(Button)`
  @media only screen and ${(props) => props.theme.media.md} {
    position: absolute;
    transition: all 0.3s ease;
    right: 0;
  }

  color: ${(props) => props.theme.colors.text.secondary};

  &:hover {
    color: ${(props) => props.theme.colors.text.secondary};
  }

  &:focus {
    color: ${(props) => props.theme.colors.text.secondary};
  }
`;

export const SiderContent = styled.div`
  padding-top: 0.5rem; // TODO review this padding
`;

export const SiderLogoLink = styled(Link)`
  height: ${(props) => props.theme.mobileLayout.headerHeight};
  padding: ${(props) => props.theme.mobileLayout.headerPadding};
  display: flex;
  align-items: center;
`;

export const BrandSpan = styled.span`
  margin: 0 1rem;
  font-weight: 700;
  font-size: 1.125rem;
  color: ${(props) => props.theme.commonColors.white};
`;
