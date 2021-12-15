import React from 'react';
import { MenuProps, Menu as AntdMenu } from 'antd';
import * as S from './Menu.styles';

export const { Item: MenuItem } = AntdMenu;

export const Menu: React.FC<MenuProps> = ({ children, ...props }) => {
  // @ts-expect-error - incorrect theme type
  return <S.Menu {...props}>{children}</S.Menu>;
};
