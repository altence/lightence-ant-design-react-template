import React from 'react';
import { TypographyProps } from 'antd';
import * as S from './H2.styles';

interface H2Props extends TypographyProps {
  className?: string;
}

export const H2: React.FC<H2Props> = ({ className, children }) => (
  <S.Text className={className} level={2}>
    {children}
  </S.Text>
);
