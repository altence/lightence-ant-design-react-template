import styled from 'styled-components';
import { Menu as AntMenu } from 'antd';

export const Menu = styled(AntMenu)`
  &.ant-menu .ant-menu-item-icon {
    font-size: ${({ theme }) => theme.fontSizes.xl};
    width: 1.25rem;
  }

  .ant-menu-item,
  .ant-menu-submenu {
    font-size: ${({ theme }) => theme.fontSizes.xs};
    border-radius: 0;
  }

  .ant-menu-item {
    fill: currentColor;
  }

  .ant-menu-inline,
  .ant-menu-vertical {
    border-right: 0;
  }
`;
