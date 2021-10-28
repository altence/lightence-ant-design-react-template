import React from 'react';
import { HProps } from '../interfaces';
import * as S from './H6.styles';

export const H6: React.FC<HProps> = ({ className, children }) => (
  <S.Text className={className} level={5}>
    {children}
  </S.Text>
);
