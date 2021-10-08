import React from 'react';
import { Button as AntButton, ButtonProps as AntButtonProps } from 'antd';
import { useMediaQuery } from 'react-responsive';
import theme from 'styles/theme';

interface ButtonProps extends AntButtonProps {
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({ className, children, ...props }) => {
  const isTablet = useMediaQuery({ query: theme.media.md });

  return (
    <AntButton size={(isTablet && 'large') || 'middle'} className={className} {...props}>
      {children}
    </AntButton>
  );
};
