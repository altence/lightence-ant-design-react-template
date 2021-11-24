import React from 'react';
import { Select as AntSelect, SelectProps as AntSelectProps } from 'antd';
import * as S from './Select.styles';
import { Width } from 'interfaces/interfaces';

export const { Option } = AntSelect;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface SelectProps extends AntSelectProps<any> {
  className?: string;
  width?: Width;
}

export const Select: React.FC<SelectProps> = ({ className, width, children, ...props }) => (
  <S.Select className={className} width={width} {...props}>
    {children}
  </S.Select>
);
