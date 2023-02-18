import React from 'react';
import { InputNumberProps as AntdInputNumberProps } from 'antd';
import * as S from './InputNumber.styles';

export interface InputNumberProps extends AntdInputNumberProps {
  block?: boolean;
}

export const InputNumber = React.forwardRef<HTMLInputElement, InputNumberProps>(
  ({ children, block, ...props }, ref) => (
    <S.InputNumber ref={ref} $block={block} {...props}>
      {children}
    </S.InputNumber>
  ),
);
