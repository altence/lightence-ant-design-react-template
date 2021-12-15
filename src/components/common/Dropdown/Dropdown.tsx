import React from 'react';
import { DropDownProps } from 'antd';
import * as S from './Dropdown.styles';

export const Dropdown: React.FC<DropDownProps> = ({ children, ...props }) => {
  return <S.Dropdown {...props}>{children}</S.Dropdown>;
};
