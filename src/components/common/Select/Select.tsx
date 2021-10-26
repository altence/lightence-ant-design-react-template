import React from 'react';
import { Select as AntSelect, SelectProps as AntSelectProps } from 'antd';
import { useResponsive } from 'hooks/useResponsive';

export const { Option } = AntSelect;

interface SelectProps extends AntSelectProps<any> {
  className?: string;
}

export const Select: React.FC<SelectProps> = ({ className, children, ...props }) => {
  const { isTablet } = useResponsive();

  return (
    <AntSelect size={(isTablet && 'large') || 'middle'} className={className} {...props}>
      {children}
    </AntSelect>
  );
};
