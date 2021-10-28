import React from 'react';
import { TypographyProps } from 'antd';
import * as S from './H3.styles';

interface H3Props extends TypographyProps {
  className?: string;
}

export const H3: React.FC<H3Props> = ({ className, children }) => (
  <S.Text className={className} level={3}>
    {children}
  </S.Text>
);
