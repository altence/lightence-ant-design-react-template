import React from 'react';
import { Input as AntInput, InputProps as AntInputProps } from 'antd';
import { useResponsive } from 'hooks/useResponsive';

export interface InputProps extends AntInputProps {
  className?: string;
}

export const Input: React.FC<InputProps> = ({ className, children, ...props }) => {
  const { isTablet } = useResponsive();

  return (
    <AntInput size={(isTablet && 'large') || 'middle'} className={className} {...props}>
      {children}
    </AntInput>
  );
};
