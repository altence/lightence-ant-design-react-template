import React from 'react';
import * as S from './Status.styles';

interface StatusProps {
  color: string;
  text: string;
}

export const Status: React.FC<StatusProps> = ({ color, text }) => <S.StatusTag color={color}>{text}</S.StatusTag>;
