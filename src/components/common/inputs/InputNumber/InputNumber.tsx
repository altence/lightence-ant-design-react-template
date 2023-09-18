import React from 'react';
import { InputNumberProps as AntInputNumberProps } from 'antd';
import * as S from './InputNumber.styles';

export interface InputNumberProps extends AntInputNumberProps {
  block?: boolean;
}

export const InputNumber = React.forwardRef<HTMLInputElement, InputNumberProps>(
  ({ children, block, ...props }, ref) => (
    <S.InputNumber ref={ref} $block={block} {...props}>
      {children}
    </S.InputNumber>
  ),
);
