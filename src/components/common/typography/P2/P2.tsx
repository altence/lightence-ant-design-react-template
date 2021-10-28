import React from 'react';
import { TypographyProps } from 'antd';
import * as S from './P2.styles';

interface P2Props extends TypographyProps {
  className?: string;
}

export const P2: React.FC<P2Props> = ({ className, children }) => <S.Text className={className}>{children}</S.Text>;
