import React from 'react';
import { Select as AntSelect, SelectProps as AntSelectProps } from 'antd';
import * as S from './Select.styles';

export const { Option } = AntSelect;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface SelectProps extends AntSelectProps<any>, S.SelectProps {
  className?: string;
}

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, width, children, ...props }, ref) => (
    <S.Select ref={ref} className={className} width={width} {...props}>
      {children}
    </S.Select>
  ),
);
