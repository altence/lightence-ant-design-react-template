import React from 'react';
import { ButtonProps as AntButtonProps, Button as AntdButton } from 'antd';
import { ButtonType } from 'antd/lib/button';
import * as S from './Button.styles';

export const { Group: ButtonGroup } = AntdButton;

export interface ButtonProps extends AntButtonProps {
  className?: string;
  type?: ButtonType;
}

export const Button: React.FC<ButtonProps> = ({ className, type = 'ghost', children, ...props }) => (
  <S.Button type={type} className={className} {...props}>
    {children}
  </S.Button>
);
