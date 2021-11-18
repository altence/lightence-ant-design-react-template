import React from 'react';
import { Select as AntSelect, SelectProps as AntSelectProps } from 'antd';
import * as S from './Select.styles';

export const { Option } = AntSelect;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
interface SelectProps extends AntSelectProps<any> {
  className?: string;
}

export const Select: React.FC<SelectProps> = ({ className, children, ...props }) => (
  <S.Select className={className} {...props}>
    {children}
  </S.Select>
);
