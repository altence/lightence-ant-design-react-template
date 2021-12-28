import React, { useContext, useMemo } from 'react';
import { useScroll } from '@app/hooks/useScroll';
import * as S from './MainHeader.styles';
import { getPixelsNumberFromDimension } from '@app/utils/utils';
import { ThemeContext } from 'styled-components';

export const MainHeader: React.FC = ({ children }) => {
  const { scrollY, scrollDirection } = useScroll();
  const theme = useContext(ThemeContext);

  const { isHidden, isScrollDown } = useMemo(
    () => ({
      isHidden: scrollY >= getPixelsNumberFromDimension(theme.mobileLayout.bgHeight),
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
