import React from 'react';
import { Input as AntInput, InputProps as AntInputProps } from 'antd';

export interface InputProps extends AntInputProps {
  className?: string;
}

export const Input: React.FC<InputProps> = ({ className, children, ...props }) => (
  <AntInput size="large" className={className} {...props}>
    {children}
  </AntInput>
);
