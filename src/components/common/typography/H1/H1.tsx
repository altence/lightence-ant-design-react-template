import React from 'react';
import { TitleProps } from 'antd/lib/typography/Title';
import * as S from './H1.styles';

interface H1Props extends TitleProps {
  className?: string;
}

export const H1: React.FC<H1Props> = ({ className, children }) => <S.Text className={className}>{children}</S.Text>;
