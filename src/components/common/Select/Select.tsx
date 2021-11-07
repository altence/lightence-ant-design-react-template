import React from 'react';
import { Select as AntSelect, SelectProps as AntSelectProps } from 'antd';

export const { Option } = AntSelect;

interface SelectProps extends AntSelectProps<string> {
  className?: string;
}

export const Select: React.FC<SelectProps> = ({ className, children, ...props }) => (
  <AntSelect className={className} {...props}>
    {children}
  </AntSelect>
);
