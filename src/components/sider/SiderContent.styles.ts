import styled from 'styled-components';
import { Menu as AntMenu } from 'antd';

export const Menu = styled(AntMenu)`
  border-right: 0;

  & .ant-menu-item,
  & .ant-menu-title-content {
    overflow: unset !important;
    white-space: unset !important;
    line-height: 1.515;
  }
`;
