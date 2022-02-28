import React from 'react';
import { ButtonProps } from '@app/components/common/buttons/Button/Button';
import { useTranslation } from 'react-i18next';
import * as S from './ViewAll.styles';

export const ViewAll: React.FC<ButtonProps> = ({ ...props }) => {
  const { t } = useTranslation();

  return (
    <S.ViewAllBtn size="small" type="text" {...props}>
      {t('nft.viewAll')}
    </S.ViewAllBtn>
  );
};
