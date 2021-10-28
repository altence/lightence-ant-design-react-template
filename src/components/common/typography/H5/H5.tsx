import React from 'react';
import { TypographyProps } from 'antd';
import * as S from './H5.styles';

interface H5Props extends TypographyProps {
  className?: string;
}

export const H5: React.FC<H5Props> = ({ className, children }) => (
  <S.Text className={className} level={5}>
    {children}
  </S.Text>
);
