import React, { useMemo } from 'react';
import { useScroll } from '@app/hooks/useScroll';
import * as S from './MainHeader.styles';

export const MainHeader: React.FC = ({ children }) => {
  const { scrollY, scrollDirection } = useScroll();

  const { isHidden, isScrollDown } = useMemo(
    () => ({
      // TODO use 100 as constant
      isHidden: scrollY >= 100,
      isScrollDown: scrollDirection === 'down',
    }),
    [scrollY, scrollDirection],
  );

  return (
    <S.Header $isHidden={isHidden} $isScrollDown={isScrollDown}>
      {children}
    </S.Header>
  );
};
