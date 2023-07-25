import React from 'react';
import { useTranslation } from 'react-i18next';
import { useAppSelector } from '@app/hooks/reduxHooks';
import * as S from './TopUpBalanceButton.styles';

export const TopUpBalanceButton: React.FC<{ onClick: () => void }> = ({ onClick }) => {
  const { t } = useTranslation();
  const { theme } = useAppSelector((state) => state.theme);
  const isDark = theme === 'dark';

  return (
    <S.TopUpButton ghost={isDark} type={isDark ? 'default' : 'primary'} block onClick={onClick}>
      {t('nft.topUpBalance')}
    </S.TopUpButton>
  );
};
