import styled from 'styled-components';
import { Menu as AntMenu } from 'antd';

export const Menu = styled(AntMenu)`
  background: transparent;
  border-right: 0;
`;

export const MenuItem = styled(Menu.Item)`
  color: ${(props) => props.theme.colors.text.secondary};

  & a button span {
    color: ${(props) => props.theme.colors.text.secondary};
  }
`;
