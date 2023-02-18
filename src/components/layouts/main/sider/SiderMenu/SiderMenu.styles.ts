import styled from 'styled-components';
import { FONT_SIZE } from '@app/styles/themes/constants';
import { BaseMenu } from '@app/components/common/BaseMenu/BaseMenu';

export const Menu = styled(BaseMenu)`
  background: transparent;
  border-right: 0;

  a {
    width: 100%;
    display: block;
  }

  .ant-menu-item,
  .ant-menu-submenu {
    font-size: ${FONT_SIZE.xs};
  }

  .ant-menu-item-icon {
    width: 1.25rem;
  }

  .ant-menu-submenu-expand-icon,
  .ant-menu-submenu-arrow,
  span[role='img'],
  a,
  .ant-menu-item,
  .ant-menu-submenu {
    color: var(--text-sider-secondary-color);
    fill: var(--text-sider-secondary-color);
  }

  .ant-menu-item:hover,
  .ant-menu-submenu-title:hover {
    .ant-menu-submenu-expand-icon,
    .ant-menu-submenu-arrow,
    span[role='img'],
    a,
    .ant-menu-item-icon,
    .ant-menu-title-content {
      color: var(--text-sider-primary-color);
      fill: var(--text-sider-primary-color);
    }
  }

  .ant-menu-submenu-selected {
    .ant-menu-submenu-title {
      color: var(--text-sider-primary-color);

      .ant-menu-submenu-expand-icon,
      .ant-menu-submenu-arrow,
      span[role='img'] {
        color: var(--text-sider-primary-color);
        fill: var(--text-sider-primary-color);
      }
    }
  }

  .ant-menu-item-selected {
    background-color: transparent !important;

    .ant-menu-submenu-expand-icon,
    .ant-menu-submenu-arrow,
    span[role='img'],
    .ant-menu-item-icon,
    a {
      color: var(--text-sider-primary-color);
      fill: var(--text-sider-primary-color);
    }
  }

  .ant-menu-item-active,
  .ant-menu-submenu-active .ant-menu-submenu-title {
    background-color: transparent !important;
  }
`;
