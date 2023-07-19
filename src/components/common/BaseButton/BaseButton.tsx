import React from 'react';
import { Button as AntdButton } from 'antd';
import type { BaseButtonProps as AntButtonProps } from 'antd/es/button/button';
import type { ButtonHTMLType } from 'antd/es/button';
import type { Severity } from '@app/interfaces/interfaces';
import * as S from './BaseButton.styles';

export const { Group: ButtonGroup } = AntdButton;

export interface BaseButtonProps extends AntButtonProps {
  severity?: Severity;
  noStyle?: boolean;

  // todo: https://github.com/ant-design/ant-design/issues/43654

  href?: string;
  target?: React.HTMLAttributeAnchorTarget;
  onClick?: React.MouseEventHandler<HTMLAnchorElement | HTMLButtonElement>;
  htmlType?: ButtonHTMLType;
}

export const BaseButton = React.forwardRef<HTMLElement, BaseButtonProps>(
  ({ className, severity, noStyle, children, ...props }, ref) => (
    <S.Button ref={ref} className={className} $noStyle={noStyle} {...props} $severity={severity}>
      {children}
    </S.Button>
  ),
);
