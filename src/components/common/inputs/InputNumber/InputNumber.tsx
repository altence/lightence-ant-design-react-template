import React from 'react';
import { InputNumber as AntInputNumber, InputNumberProps as AntdInputNumberProps } from 'antd';

export interface InputNumberProps extends AntdInputNumberProps {
  className?: string;
}

export const InputNumber = React.forwardRef<HTMLInputElement, InputNumberProps>(
  ({ className, children, ...props }, ref) => (
    <AntInputNumber ref={ref} className={className} {...props}>
      {children}
    </AntInputNumber>
  ),
);
