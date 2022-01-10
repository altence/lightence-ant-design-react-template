import React from 'react';
import { ButtonProps as AntButtonProps, Button as AntdButton } from 'antd';
import { ButtonType } from 'antd/lib/button';
import * as S from './Button.styles';

export const { Group: ButtonGroup } = AntdButton;

export interface ButtonProps extends AntButtonProps {
  className?: string;
  type?: ButtonType;
}

export const Button = React.forwardRef<HTMLElement, ButtonProps>(
  ({ className, type = 'ghost', children, ...props }, ref) => (
    <S.Button ref={ref} type={type} className={className} {...props}>
      {children}
    </S.Button>
  ),
);
