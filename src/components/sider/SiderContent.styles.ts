import styled from 'styled-components';
import { Menu as AntMenu } from 'antd';

export const Menu = styled(AntMenu)`
  background: transparent;
  border-right: 0;

  color: ${(props) => props.theme.colors.text.secondary};

  .ant-menu-submenu-expand-icon,
  .ant-menu-submenu-arrow,
  span[role='img'] {
    color: ${(props) => props.theme.colors.text.secondary};
  }

  .ant-menu-item:hover,
  .ant-menu-item-active,
  .ant-menu:not(.ant-menu-inline) .ant-menu-submenu-open,
  .ant-menu-submenu-active,
  .ant-menu-submenu-title:hover,
  .ant-menu-item.ant-menu-item-selected,
  .ant-menu-submenu.ant-menu-submenu-selected,
  .ant-menu-submenu:hover > .ant-menu-submenu-title > .ant-menu-submenu-expand-icon,
  .ant-menu-submenu:hover > .ant-menu-submenu-title > .ant-menu-submenu-arrow,
  .ant-menu-submenu:hover span[role='img'],
  .ant-menu-item-selected a,
  .ant-menu-item-selected a:hover,
  .ant-menu-item a:hover {
    color: ${(props) => props.theme.colors.text.secondary};
  }

  .ant-menu-submenu-title {
    background-color: transparent;
  }

  .ant-menu-submenu-selected {
    .ant-menu-submenu-title {
      background-color: ${(props) => props.theme.colors.main.primaryShade};
    }
  }

  .ant-menu-item-selected {
    background-color: ${(props) => props.theme.colors.main.primaryShade} !important;
  }

  a {
    width: 100%;
    display: block;

    color: ${(props) => props.theme.colors.text.secondary};
  }
`;
