import React from 'react';
import { Button as AntdButton, ButtonProps as AntButtonProps } from 'antd';
import type { Severity } from '@app/interfaces/interfaces';
import * as S from './BaseButton.styles';

export const { Group: ButtonGroup } = AntdButton;

export interface BaseButtonProps extends AntButtonProps {
  severity?: Severity;
  noStyle?: boolean;
}

export const BaseButton = React.forwardRef<HTMLElement, BaseButtonProps>(
  ({ className, severity, noStyle, children, ...props }, ref) => (
    <S.Button ref={ref} className={className} $noStyle={noStyle} {...props} $severity={severity}>
      {children}
    </S.Button>
  ),
);
