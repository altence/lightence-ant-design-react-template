import React from 'react';
import { Input as AntInput, InputProps as AntInputProps } from 'antd';
import { useMediaQuery } from 'react-responsive';
import theme from 'styles/theme';

interface InputPasswordProps extends AntInputProps {
  className?: string;
}

export const InputPassword: React.FC<InputPasswordProps> = ({ className, children, ...props }) => {
  const isTablet = useMediaQuery({ query: theme.media.md });

  return (
    <AntInput.Password size={(isTablet && 'large') || 'middle'} className={className} {...props}>
      {children}
    </AntInput.Password>
  );
};
