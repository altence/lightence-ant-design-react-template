import React from 'react';
import { TypographyProps } from 'antd';
import * as S from './H6.styles';

interface H6Props extends TypographyProps {
  className?: string;
}

export const H6: React.FC<H6Props> = ({ className, children }) => (
  <S.Text className={className} level={5}>
    {children}
  </S.Text>
);
