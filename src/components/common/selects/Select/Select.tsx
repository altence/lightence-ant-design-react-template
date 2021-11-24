import React from 'react';
import { Select as AntSelect, SelectProps as AntSelectProps } from 'antd';
import * as S from './Select.styles';

export const { Option } = AntSelect;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface SelectProps extends S.SelectProps, AntSelectProps<any> {
  className?: string;
}

export const Select: React.FC<SelectProps> = ({ className, width, children, ...props }) => (
  <S.Select className={className} width={width} {...props}>
    {children}
  </S.Select>
);
