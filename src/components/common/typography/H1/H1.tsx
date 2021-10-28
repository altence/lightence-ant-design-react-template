import React from 'react';
import { HProps } from '../interfaces';
import * as S from './H1.styles';

export const H1: React.FC<HProps> = ({ className, children }) => <S.Text className={className}>{children}</S.Text>;
