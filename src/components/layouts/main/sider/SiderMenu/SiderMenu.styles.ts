import styled from 'styled-components';
import { Menu as AntMenu } from 'antd';

export const Menu = styled(AntMenu)`
  background: transparent;
  border-right: 0;

  a {
    width: 100%;
    display: block;
  }

  .ant-menu-item,
  .ant-menu-submenu {
    font-size: ${(props) => props.theme.commonFontSizes.xs};
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
    color: ${(props) => props.theme.colors.text.siderSecondary};
    fill: ${(props) => props.theme.colors.text.siderSecondary};
  }

  .ant-menu-item:hover,
  .ant-menu-submenu-title:hover {
    .ant-menu-submenu-expand-icon,
    .ant-menu-submenu-arrow,
    span[role='img'],
    a,
    .ant-menu-item-icon,
    .ant-menu-title-content {
      color: ${(props) => props.theme.colors.text.siderPrimary};
      fill: ${(props) => props.theme.colors.text.siderPrimary};
    }
  }

  .ant-menu-submenu-selected {
    .ant-menu-submenu-title {
      color: ${(props) => props.theme.colors.text.siderPrimary};

      .ant-menu-submenu-expand-icon,
      .ant-menu-submenu-arrow,
      span[role='img'] {
        color: ${(props) => props.theme.colors.text.siderPrimary};
        fill: ${(props) => props.theme.colors.text.siderPrimary};
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
      color: ${(props) => props.theme.colors.text.siderPrimary};
      fill: ${(props) => props.theme.colors.text.siderPrimary};
    }
  }

  .ant-menu-item-active,
  .ant-menu-submenu-active .ant-menu-submenu-title {
    background-color: transparent !important;
  }
`;
