import React from 'react';
import { PProps } from '../interfaces';
import * as S from './P1.styles';

export const P1: React.FC<PProps> = ({ className, children }) => <S.Text className={className}>{children}</S.Text>;
