import React from 'react';
import { ParagraphProps } from 'antd/lib/typography/Paragraph';
import * as S from './P1.styles';

interface P1Props extends ParagraphProps {
  className?: string;
}

export const P1: React.FC<P1Props> = ({ className, children }) => <S.Text className={className}>{children}</S.Text>;
