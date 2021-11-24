import styled, { css } from 'styled-components';
import { Button, Layout } from 'antd';
import { Link } from 'react-router-dom';

export const Sider = styled(Layout.Sider)`
  position: fixed;
  overflow: visible;
  right: 0;
  z-index: 5;
  min-height: 100vh;
  max-height: 100vh;

  color: ${(props) => props.theme.colors.text.secondary};

  @media only screen and ${(props) => props.theme.media.md} {
    right: unset;
    left: 0;
  }

  @media only screen and ${(props) => props.theme.media.xl} {
    position: unset;
  }
`;

export const CollapseButton = styled(Button)<{ isCollapsed: boolean }>`
  background: ${(props) => props.theme.colors.main.primary};
  transition: all 0.2s ease;
  position: absolute;
  right: 0.5rem;

  ${(props) =>
    props.isCollapsed &&
    css`
      right: -1rem;
    `}

  color: ${(props) => props.theme.colors.text.secondary};

  &:hover {
    color: ${(props) => props.theme.colors.text.secondary};
    background: ${(props) => props.theme.colors.main.primary};
  }

  &:focus {
    color: ${(props) => props.theme.colors.text.secondary};
    background: ${(props) => props.theme.colors.main.primary};
  }
`;

export const SiderContent = styled.div`
  overflow-y: auto;
  overflow-x: hidden;
  max-height: calc(100vh - ${(props) => props.theme.mobileLayout.headerHeight});

  @media only screen and ${(props) => props.theme.media.md} {
    max-height: calc(100vh - ${(props) => props.theme.desktopLayout.headerHeight});
  }
`;

export const SiderLogoLink = styled(Link)`
  display: flex;
  align-items: center;
  overflow: hidden;
  position: relative;
`;

export const SiderLogoDiv = styled.div`
  height: ${(props) => props.theme.mobileLayout.headerHeight};
  padding: ${(props) => props.theme.mobileLayout.headerPadding};
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media only screen and ${(props) => props.theme.media.md} {
    height: ${(props) => props.theme.desktopLayout.headerHeight};
    padding-top: ${(props) => props.theme.desktopLayout.paddingVertical};
    padding-bottom: ${(props) => props.theme.desktopLayout.paddingVertical};
  }
`;

export const BrandSpan = styled.span`
  margin: 0 1rem;
  font-weight: 700;
  font-size: 1.125rem;
  color: ${(props) => props.theme.commonColors.white};
`;
