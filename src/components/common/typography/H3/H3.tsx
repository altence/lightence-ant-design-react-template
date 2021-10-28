import React from 'react';
import { TitleProps } from 'antd/lib/typography/Title';
import * as S from './H3.styles';

interface H3Props extends TitleProps {
  className?: string;
}

export const H3: React.FC<H3Props> = ({ className, children }) => (
  <S.Text className={className} level={3}>
    {children}
  </S.Text>
);
