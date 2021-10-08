import React from 'react';
import { Input as AntInput } from 'antd';
import { useMediaQuery } from 'react-responsive';
import theme from 'styles/theme';

interface InputProps {
  className: string;
}

export const Input: React.FC<InputProps> = ({ className, children, ...props }) => {
  const isTablet = useMediaQuery({ query: theme.media.md });

  return (
    <AntInput size={(isTablet && 'large') || 'middle'} className={className} {...props}>
      {children}
    </AntInput>
  );
};
