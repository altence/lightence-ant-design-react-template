import React from 'react';
import { TypographyProps } from 'antd';
import * as S from './H4.styles';

interface H4Props extends TypographyProps {
  className?: string;
}

export const H4: React.FC<H4Props> = ({ className, children }) => (
  <S.Text className={className} level={4}>
    {children}
  </S.Text>
);
