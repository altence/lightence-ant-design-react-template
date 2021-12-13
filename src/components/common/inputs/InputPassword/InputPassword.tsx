import React from 'react';
import { Input as AntInput, InputProps as AntInputProps } from 'antd';

interface InputPasswordProps extends AntInputProps {
  className?: string;
  visibilityToggle?: boolean;
  iconRender?: (visible: boolean) => React.ReactNode;
}

export const InputPassword = React.forwardRef<AntInput, InputPasswordProps>(
  ({ className, children, ...props }, ref) => (
    <AntInput.Password ref={ref} className={className} {...props}>
      {children}
    </AntInput.Password>
  ),
);
