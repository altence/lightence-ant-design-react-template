import { forwardRef } from 'react';
import { Button as AntButton, ButtonProps as AntButtonProps } from 'antd';
import type { Severity } from '@app/interfaces/interfaces';
import * as S from './BaseButton.styles';

export const { Group: ButtonGroup } = AntButton;

export interface BaseButtonProps extends AntButtonProps {
  severity?: Severity;
  noStyle?: boolean;
}

export const BaseButton = forwardRef<HTMLElement, BaseButtonProps>(
  ({ className, severity, noStyle, children, ...props }, ref) => (
    <S.Button ref={ref} className={className} $noStyle={noStyle} {...props} $severity={severity}>
      {children}
    </S.Button>
  ),
);
