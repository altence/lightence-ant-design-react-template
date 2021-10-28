import React from 'react';
import { TypographyProps } from 'antd';
import * as S from './H1.styles';

interface H1Props extends TypographyProps {
  className?: string;
}

export const H1: React.FC<H1Props> = ({ className, children }) => <S.Text className={className}>{children}</S.Text>;
