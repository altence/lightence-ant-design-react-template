import React from 'react';
import { PProps } from '../interfaces';
import * as S from './P2.styles';

export const P2: React.FC<PProps> = ({ className, children }) => <S.Text className={className}>{children}</S.Text>;
