import React from 'react';
import { useTranslation } from 'react-i18next';
import { useAppSelector } from '@app/hooks/reduxHooks';
import * as S from './TopUpBalanceButton.styles';

export const TopUpBalanceButton: React.FC<{ onClick: () => void }> = ({ onClick }) => {
  const { t } = useTranslation();
  const { theme } = useAppSelector((state) => state.theme);

  console.log(theme);

  return (
    <S.TopUpButton type={theme === 'dark' ? 'ghost' : 'primary'} block onClick={onClick}>
      {t('nft.topUpBalance')}
    </S.TopUpButton>
  );
};
