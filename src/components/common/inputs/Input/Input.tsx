import React from 'react';
import { Input as AntInput, InputProps as AntInputProps } from 'antd';

export interface InputProps extends AntInputProps {
  className?: string;
}

export const Input = React.forwardRef<AntInput, InputProps>(({ className, children, ...props }, ref) => (
  <AntInput ref={ref} className={className} {...props}>
    {children}
  </AntInput>
));
