import styled, { css } from 'styled-components';
import { Menu as AntMenu } from 'antd';
import { MenuItemProps } from './interfaces';

export const Menu = styled(AntMenu)`
  background: transparent;
  border-right: 0;

  color: ${(props) => props.theme.colors.text.secondary};

  & .ant-menu-item,
  & .ant-menu-title-content {
    overflow: unset !important;
    white-space: unset !important;
    line-height: 1.515;
  }

  & .ant-menu-submenu-expand-icon,
  .ant-menu-submenu-arrow,
  & span[role='img'] {
    color: ${(props) => props.theme.colors.text.secondary};
  }

  & .ant-menu-item:hover,
  & .ant-menu-item-active,
  & .ant-menu:not(.ant-menu-inline) .ant-menu-submenu-open,
  & .ant-menu-submenu-active,
  & .ant-menu-submenu-title:hover,
  & .ant-menu-item.ant-menu-item-selected,
  & .ant-menu-submenu.ant-menu-submenu-selected,
  & .ant-menu-submenu:hover > .ant-menu-submenu-title > .ant-menu-submenu-expand-icon,
  & .ant-menu-submenu:hover > .ant-menu-submenu-title > .ant-menu-submenu-arrow,
  & .ant-menu-submenu:hover span[role='img'],
  & .ant-menu-item-selected a,
  & .ant-menu-item-selected a:hover,
  & .ant-menu-item a:hover {
    color: ${(props) => props.theme.colors.text.secondary};
  }

  &:not(.ant-menu-horizontal) .ant-menu-item-selected {
    background: ${(props) => props.theme.colors.main.primaryGradient};

    &::after {
      display: none;
    }
  }

  & a {
    width: 100%;
    display: block;

    color: ${(props) => props.theme.colors.text.secondary};
  }
`;

export const Submenu = styled(AntMenu.SubMenu)<MenuItemProps>`
  ${(props) =>
    props.isActive &&
    css`
      &:not(.ant-menu-submenu-open) {
        background: ${(props) => props.theme.colors.main.primaryGradient};
      }
    `}
`;
