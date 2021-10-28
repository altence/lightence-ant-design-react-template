import React from 'react';
import { ButtonProps as AntButtonProps } from 'antd';
import { ButtonType } from 'antd/lib/button';
import * as S from './Button.styles';

export interface ButtonProps extends AntButtonProps {
  className?: string;
  type: ButtonType;
}

export const Button: React.FC<ButtonProps> = ({ className, type = 'ghost', children, ...props }) => (
  <S.Button size="large" type={type} className={className} {...props}>
    {children}
  </S.Button>
);
