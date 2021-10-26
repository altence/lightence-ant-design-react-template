import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { AdviceListBtn } from '../AdviceBtnList/AdviceBtnList';
import { AdviceTileBtn } from '../AdviceBtnTile/AdviceBtnTile';
import { useResponsive } from 'hooks/useResponsive';
import * as S from './PiecesOfAdviceHeader.styles';

export const PiecesOfAdviceHeader: React.FC = () => {
  const [isActive, setActive] = useState('tile');

  const { isTablet } = useResponsive();

  const { t } = useTranslation();

  const handleClick = (mode: string) => () => {
    setActive(mode);
  };

  return (
    <S.Wrapper>
      {t('dashboard.piecesOfAdvice')}
      {isTablet && (
        <S.ButtonsWrapper>
          <AdviceTileBtn isActive={isActive === 'tile'} onClick={handleClick('tile')} />
          <AdviceListBtn isActive={isActive === 'list'} onClick={handleClick('list')} />
        </S.ButtonsWrapper>
      )}
    </S.Wrapper>
  );
};
