import React from 'react';
import { HProps } from '../interfaces';
import * as S from './H3.styles';

export const H3: React.FC<HProps> = ({ className, children }) => (
  <S.Text className={className} level={3}>
    {children}
  </S.Text>
);
