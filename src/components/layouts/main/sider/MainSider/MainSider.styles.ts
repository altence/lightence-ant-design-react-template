import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { media } from '@app/utils/utils';
import { LAYOUT } from '@app/styles/themes/constants';
import { BaseButton } from '@app/components/common/BaseButton/BaseButton';
import { BaseLayout } from '@app/components/common/BaseLayout/BaseLayout';

export const Sider = styled(BaseLayout.Sider)`
  overflow: visible;
  right: 0;
  z-index: 5;
  min-height: 100vh;
  max-height: 100vh;
  color: ${({ theme }) => theme.textSecondary};

  @media only screen and (${media('md')}) {
    right: unset;
    left: 0;
  }

  &.ant-layout-sider {
    position: fixed;

    @media only screen and (${media('xl')}) {
      position: unset;
    }
  }
`;

interface Collapse {
  $isCollapsed: boolean;
}

export const CollapseButton = styled(BaseButton)<Collapse>`
  background: ${({ theme }) => theme.collapseBackground};
  border: 1px solid ${({ theme }) => theme.border};
  transition: all 0.2s ease;
  position: absolute;
  right: 0.5rem;
  color: ${({ theme }) => theme.textSecondary};

  ${(props) =>
    props.$isCollapsed &&
    css`
      right: -1rem;
    `}

  &.ant-btn:not(:disabled):hover,
  &.ant-btn:not(:disabled):focus {
    color: ${({ theme }) => theme.textSecondary};
    background: ${({ theme }) => theme.primary};
    border: 1px solid ${({ theme }) => theme.border};
  }
`;

export const SiderContent = styled.div`
  overflow-y: auto;
  overflow-x: hidden;
  max-height: calc(100vh - ${LAYOUT.mobile.headerHeight});

  @media only screen and (${media('md')}) {
    max-height: calc(100vh - ${LAYOUT.desktop.headerHeight});
  }
`;

export const SiderLogoLink = styled(Link)`
  display: flex;
  align-items: center;
  overflow: hidden;
  position: relative;
`;

export const SiderLogoDiv = styled.div`
  height: ${LAYOUT.mobile.headerHeight};
  padding: ${LAYOUT.mobile.headerPadding};
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media only screen and (${media('md')}) {
    height: ${LAYOUT.desktop.headerHeight};
    padding-top: ${LAYOUT.desktop.paddingVertical};
    padding-bottom: ${LAYOUT.desktop.paddingVertical};
  }
`;

export const BrandSpan = styled.span`
  margin: 0 1rem;
  font-weight: 700;
  font-size: 1.125rem;
  color: ${({ theme }) => theme.white};
`;
