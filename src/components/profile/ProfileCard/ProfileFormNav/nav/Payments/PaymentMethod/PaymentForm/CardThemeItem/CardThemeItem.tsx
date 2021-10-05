import React, { useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { cardThemes } from 'constants/cardThemes';
import { FormItem } from 'components/profile/ProfileCard/ProfileFormNav/ProfileForm/ProfileForm.styles';
import * as S from './CardThemeItem.styles';
import { CreditCard } from '../interfaces';

interface CardThemeItemProps {
  cardData: CreditCard;
  setCardData: (state: CreditCard) => void;
}

export const CardThemeItem: React.FC<CardThemeItemProps> = ({ cardData, setCardData }) => {
  const { t } = useTranslation();

  const handleChange = useCallback(
    (item) => () => {
      setCardData({ ...cardData, background: item.background });
    },
    [setCardData, cardData],
  );

  const themes = useMemo(
    () =>
      cardThemes.map((item) => (
        <S.BackgroundWrapper key={item.id} isActive={cardData.background === item.background}>
          <S.Theme background={item.background} onClick={handleChange(item)} />
        </S.BackgroundWrapper>
      )),
    [cardData, handleChange],
  );

  return (
    <FormItem label={t('profile.nav.payments.cardTheme')}>
      <S.Wrapper>{themes}</S.Wrapper>
    </FormItem>
  );
};
