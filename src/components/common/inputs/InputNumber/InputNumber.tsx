import React from 'react';
import { InputNumberProps as AntdInputNumberProps } from 'antd';
import * as S from './InputNumber.styles';

export interface InputNumberProps extends AntdInputNumberProps {
  className?: string;
  $block?: boolean;
}

export const InputNumber = React.forwardRef<HTMLInputElement, InputNumberProps>(
  ({ className, children, $block, ...props }, ref) => (
    <S.InputNumber ref={ref} className={className} $block={$block} {...props}>
      {children}
    </S.InputNumber>
  ),
);
