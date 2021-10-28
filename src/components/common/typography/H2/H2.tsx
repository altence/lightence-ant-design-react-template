import React from 'react';
import { HProps } from '../interfaces';
import * as S from './H2.styles';

export const H2: React.FC<HProps> = ({ className, children }) => (
  <S.Text className={className} level={2}>
    {children}
  </S.Text>
);
