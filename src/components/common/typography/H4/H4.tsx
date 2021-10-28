import React from 'react';
import { HProps } from '../interfaces';
import * as S from './H4.styles';

export const H4: React.FC<HProps> = ({ className, children }) => (
  <S.Text className={className} level={4}>
    {children}
  </S.Text>
);
