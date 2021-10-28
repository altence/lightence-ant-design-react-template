import React from 'react';
import { ParagraphProps } from 'antd/lib/typography/Paragraph';
import * as S from './P2.styles';

interface P2Props extends ParagraphProps {
  className?: string;
}

export const P2: React.FC<P2Props> = ({ className, children }) => <S.Text className={className}>{children}</S.Text>;
