import React from 'react';
import { TypographyProps } from 'antd';
import * as S from './P1.styles';

interface P1Props extends TypographyProps {
  className?: string;
}

export const P1: React.FC<P1Props> = ({ className, children }) => <S.Text className={className}>{children}</S.Text>;
