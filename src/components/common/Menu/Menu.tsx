import React from 'react';
import { MenuProps, Menu as AntdMenu } from 'antd';
import * as S from './Menu.styles';

export const SubMenu = AntdMenu.SubMenu;

export const Menu: React.FC<MenuProps> = ({ children, ...props }) => {
  return <S.Menu {...props}>{children}</S.Menu>;
};
