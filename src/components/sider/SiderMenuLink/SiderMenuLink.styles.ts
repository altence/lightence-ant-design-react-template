import styled from 'styled-components';
import { Menu } from 'antd';
import { MenuItemProps } from '../interfaces';

export const MenuItem = styled(Menu.Item)<MenuItemProps>`
  ${(props) => props.isActive && `background: ${props.theme.colors.main.primaryGradient}`}
`;
