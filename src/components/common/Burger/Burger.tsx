import React from 'react';
import * as S from './Burger.styles';

interface BurgerProps {
  onClick?: () => void;
}

export const Burger: React.FC<BurgerProps> = ({ onClick }) => (
  <S.Burger onClick={onClick}>
    <S.BurgerLine />
    <S.BurgerLine />
    <S.BurgerLine />
  </S.Burger>
);
