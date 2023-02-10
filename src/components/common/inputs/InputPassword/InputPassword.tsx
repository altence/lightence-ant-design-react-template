import React from 'react';
import { InputProps as AntInputProps, InputRef } from 'antd';
import * as S from './InputPassword.styles';

interface InputPasswordProps extends AntInputProps {
  className?: string;
  visibilityToggle?: boolean;
  iconRender?: (open: boolean) => React.ReactNode;
}

export const InputPassword = React.forwardRef<InputRef, InputPasswordProps>(
  ({ className, children, ...props }, ref) => (
    <S.InputPassword ref={ref} className={className} {...props}>
      {children}
    </S.InputPassword>
  ),
);
