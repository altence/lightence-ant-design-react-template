import React from 'react';
import { Input as AntInput, InputProps as AntInputProps } from 'antd';
import { useResponsive } from 'hooks/useResponsive';

interface InputPasswordProps extends AntInputProps {
  className?: string;
}

export const InputPassword: React.FC<InputPasswordProps> = ({ className, children, ...props }) => {
  const { isTablet } = useResponsive();

  return (
    <AntInput.Password size={(isTablet && 'large') || 'middle'} className={className} {...props}>
      {children}
    </AntInput.Password>
  );
};
