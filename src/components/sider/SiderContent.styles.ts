import styled from 'styled-components';
import { Menu as AntMenu } from 'antd';

export const Menu = styled(AntMenu)`
  background: transparent;
  border-right: 0;

  & a {
    color: ${(props) => props.theme.colors.text.secondary};
  }

  & span[role='img'] {
    font-size: 1.25rem;
    margin-right: 1rem;
  }

  & .ant-menu-item,
  .ant-menu-submenu-title {
    white-space: unset;
    overflow: unset;

    & .ant-menu-title-content {
      line-height: 1.5;
    }
  }
`;

export const Submenu = styled(AntMenu.SubMenu)`
  color: ${(props) => props.theme.colors.text.secondary};

  & .ant-menu-item:hover,
  & .ant-menu-item-active,
  & .ant-menu:not(.ant-menu-inline) .ant-menu-submenu-open,
  & .ant-menu-submenu-active,
  & .ant-menu-submenu-title,
  & .ant-menu-submenu-title:hover,
  & .ant-menu-submenu-expand-icon,
  .ant-menu-submenu-arrow,
  &:hover > .ant-menu-submenu-title > .ant-menu-submenu-expand-icon,
  &:hover > .ant-menu-submenu-title > .ant-menu-submenu-arrow {
    color: ${(props) => props.theme.colors.text.secondary};
  }

  & a {
    padding-left: 1.375rem;
  }
`;
