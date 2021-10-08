import React from 'react';
import { Input as AntInput, InputProps as AntInputProps } from 'antd';
import { useMediaQuery } from 'react-responsive';
import theme from 'styles/theme';

interface InputProps extends AntInputProps {
  className?: string;
}

export const Input: React.FC<InputProps> = ({ className, children, ...props }) => {
  const isTablet = useMediaQuery({ query: theme.media.md });

  return (
    <AntInput size={(isTablet && 'large') || 'middle'} className={className} {...props}>
      {children}
    </AntInput>
  );
};
