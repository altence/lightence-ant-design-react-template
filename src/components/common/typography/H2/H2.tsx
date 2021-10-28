import React from 'react';
import { TitleProps } from 'antd/lib/typography/Title';
import * as S from './H2.styles';

interface H2Props extends TitleProps {
  className?: string;
}

export const H2: React.FC<H2Props> = ({ className, children }) => (
  <S.Text className={className} level={2}>
    {children}
  </S.Text>
);
