import styled from 'styled-components';
import { Button, Layout } from 'antd';
import { Link } from 'react-router-dom';

export const Sider = styled(Layout.Sider)`
  position: fixed;
  overflow-y: auto;
  overflow-x: hidden;
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
    //position: absolute;
    transition: all 0.3s ease;
    //right: 0;
    //top: 0;
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
  padding-top: ${(props) => props.theme.mobileLayout.paddingVertical};

  @media only screen and ${(props) => props.theme.media.md} {
    padding-top: ${(props) => props.theme.desktopLayout.paddingVertical};
  }
`;

export const SiderLogoLink = styled(Link)`
  height: ${(props) => props.theme.mobileLayout.headerHeight};
  padding: ${(props) => props.theme.mobileLayout.headerPadding};
  display: flex;
  align-items: center;

  @media only screen and ${(props) => props.theme.media.md} {
    height: ${(props) => props.theme.desktopLayout.headerHeight};
    padding-top: ${(props) => props.theme.desktopLayout.paddingVertical};
    padding-bottom: ${(props) => props.theme.desktopLayout.paddingVertical};
  }
`;

export const SiderLogoDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const BrandSpan = styled.span`
  margin: 0 1rem;
  font-weight: 700;
  font-size: 1.125rem;
  color: ${(props) => props.theme.commonColors.white};
`;
