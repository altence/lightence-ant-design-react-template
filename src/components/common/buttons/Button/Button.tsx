import React from 'react';
import { ButtonProps as AntButtonProps, Button as AntdButton } from 'antd';
import { Severity } from '@app/interfaces/interfaces';
import * as S from './Button.styles';

export const { Group: ButtonGroup } = AntdButton;

export interface ButtonProps extends AntButtonProps {
  className?: string;
  severity?: Severity;
  noStyle?: boolean;
}

export const Button = React.forwardRef<HTMLElement, ButtonProps>(
  ({ className, severity, noStyle, children, ...props }, ref) => (
    <S.Button ref={ref} className={className} $noStyle={noStyle} {...props} $severity={severity}>
      {children}
    </S.Button>
  ),
);
