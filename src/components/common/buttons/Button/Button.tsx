import React from 'react';
import { Button as AntButton, ButtonProps as AntButtonProps } from 'antd';
import { useResponsive } from 'hooks/useResponsive';

interface ButtonProps extends AntButtonProps {
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({ className, children, ...props }) => {
  const { isTablet } = useResponsive();

  return (
    <AntButton size={(isTablet && 'large') || 'middle'} className={className} {...props}>
      {children}
    </AntButton>
  );
};
