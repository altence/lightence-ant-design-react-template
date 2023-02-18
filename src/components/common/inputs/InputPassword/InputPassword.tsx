import React from 'react';
import * as S from './InputPassword.styles';
import { BaseInputProps, BaseInputRef } from '../BaseInput/BaseInput';

interface InputPasswordProps extends BaseInputProps {
  className?: string;
  visibilityToggle?: boolean;
  iconRender?: (open: boolean) => React.ReactNode;
}

export const InputPassword = React.forwardRef<BaseInputRef, InputPasswordProps>(
  ({ className, children, ...props }, ref) => (
    <S.InputPassword ref={ref} className={className} {...props}>
      {children}
    </S.InputPassword>
  ),
);
