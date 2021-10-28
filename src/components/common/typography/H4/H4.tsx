import React from 'react';
import { TitleProps } from 'antd/lib/typography/Title';
import * as S from './H4.styles';

interface H4Props extends TitleProps {
  className?: string;
}

export const H4: React.FC<H4Props> = ({ className, children }) => (
  <S.Text className={className} level={4}>
    {children}
  </S.Text>
);
