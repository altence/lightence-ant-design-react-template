import React from 'react';
import { Input as AntInput, InputProps as AntInputProps } from 'antd';

interface InputPasswordProps extends AntInputProps {
  className?: string;
}

export const InputPassword: React.FC<InputPasswordProps> = ({ className, children, ...props }) => (
  <AntInput.Password className={className} {...props}>
    {children}
  </AntInput.Password>
);
