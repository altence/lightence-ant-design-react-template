import React, { useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { cardThemes } from 'constants/cardThemes';
import { FormItem } from '../../../../../../ProfileForm/ProfileForm.styles';
import * as S from './CardThemeItem.styles';

interface CardThemeItemProps {
  currentTheme: string;
  setCurrentTheme: (state: string) => void;
  setFieldsChange: (state: boolean) => void;
}

export const CardThemeItem: React.FC<CardThemeItemProps> = ({ currentTheme, setCurrentTheme, setFieldsChange }) => {
  const { t } = useTranslation();

  const handleChange = useCallback(
    (item) => () => {
      setCurrentTheme(item.background);
      setFieldsChange(true);
    },
    [setCurrentTheme, setFieldsChange, currentTheme],
  );

  const themes = useMemo(
    () =>
      cardThemes.map((item) => (
        <S.BackgroundWrapper key={item.id} isActive={currentTheme === item.background}>
          <S.Theme background={item.background} onClick={handleChange(item)} />
        </S.BackgroundWrapper>
      )),
    [currentTheme, handleChange, cardThemes],
  );

  return (
    <FormItem label={t('profile.nav.payments.cardTheme')}>
      <S.Wrapper>{themes}</S.Wrapper>
    </FormItem>
  );
};
