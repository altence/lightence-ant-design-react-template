import React from 'react';
import { HProps } from '../interfaces';
import * as S from './H5.styles';

export const H5: React.FC<HProps> = ({ className, children }) => (
  <S.Text className={className} level={5}>
    {children}
  </S.Text>
);
