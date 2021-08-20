import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { AdviceListBtn } from '../AdviceBtnList/AdviceBtnList';
import { AdviceTileBtn } from '../AdviceBtnTile/AdviceBtnTile';
import theme from '../../../../styles/theme';
import * as S from './PiecesOfAdviceHeader.styles';

export const PiecesOfAdviceHeader: React.FC = () => {
  const isTablet = useMediaQuery({ query: theme.media.md });
  const [isActive, setActive] = useState('tile');

  const handleClick = (mode: string) => () => {
    setActive(mode);
  };

  return (
    <S.Wrapper>
      Pieces of advice
      {isTablet && (
        <S.ButtonsWrapper>
          <AdviceTileBtn isActive={isActive === 'tile'} onClick={handleClick('tile')} />
          <AdviceListBtn isActive={isActive === 'list'} onClick={handleClick('list')} />
        </S.ButtonsWrapper>
      )}
    </S.Wrapper>
  );
};
