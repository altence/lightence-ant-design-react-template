import React, { useMemo } from 'react';
import { useScroll } from '@app/hooks/useScroll';
import * as S from './MainHeader.styles';

export const MainHeader: React.FC = ({ children }) => {
  const { scrollY, scrollDirection } = useScroll();

  const { isHidden, isScrolled, isScrollDown } = useMemo(
    () => ({
      isHidden: scrollY >= 100,
      isScrolled: scrollY >= 200,
      isScrollDown: scrollDirection === 'down',
    }),
    [scrollY, scrollDirection],
  );

  return (
    <S.Header $isHidden={isHidden} $isScrolled={isScrolled} $isScrollDown={isScrollDown}>
      {children}
    </S.Header>
  );
};
