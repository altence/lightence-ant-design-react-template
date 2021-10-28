import React from 'react';
import { TitleProps } from 'antd/lib/typography/Title';
import * as S from './H6.styles';

interface H6Props extends TitleProps {
  className?: string;
}

export const H6: React.FC<H6Props> = ({ className, children }) => (
  <S.Text className={className} level={5}>
    {children}
  </S.Text>
);
