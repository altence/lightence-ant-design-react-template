import React, { ComponentProps } from 'react';
import { Select as AntSelect } from 'antd';
import * as S from './Select.styles';

export const { Option } = AntSelect;

export interface SelectProps extends ComponentProps<typeof AntSelect>, S.SelectProps {
  className?: string;
}

export const Select: React.FC<SelectProps> = ({ className, width, children, ...props }) => (
  <S.Select className={className} width={width} {...props}>
    {children}
  </S.Select>
);
