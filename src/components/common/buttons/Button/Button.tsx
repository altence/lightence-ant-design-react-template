import React from 'react';
import { ButtonProps as AntButtonProps, Button as AntdButton } from 'antd';
import { ButtonType } from 'antd/lib/button';
import { Severity } from '@app/interfaces/interfaces';
import * as S from './Button.styles';

export const { Group: ButtonGroup } = AntdButton;

export interface ButtonProps extends AntButtonProps {
  className?: string;
  type?: ButtonType;
  $severity?: Severity;
}

export const Button = React.forwardRef<HTMLElement, ButtonProps>(
  ({ className, type = 'ghost', $severity, children, ...props }, ref) => (
    <S.Button ref={ref} type={$severity ? 'primary' : type} className={className} {...props} $severity={$severity}>
      {children}
    </S.Button>
  ),
);
