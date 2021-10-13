import React from 'react';
import { Select as AntSelect, SelectProps as AntSelectProps } from 'antd';
import { useMediaQuery } from 'react-responsive';
import theme from 'styles/theme';

export const { Option } = AntSelect;

interface SelectProps extends AntSelectProps<any> {
  className?: string;
}

export const Select: React.FC<SelectProps> = ({ className, children, ...props }) => {
  const isTablet = useMediaQuery({ query: theme.media.md });

  return (
    <AntSelect size={(isTablet && 'large') || 'middle'} className={className} {...props}>
      {children}
    </AntSelect>
  );
};
