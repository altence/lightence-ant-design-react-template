import React from 'react';
import { ButtonProps } from '@app/components/common/buttons/Button/Button';
import { useTranslation } from 'react-i18next';
import * as S from './ViewAll.styles';

interface ViewAllProps extends ButtonProps {
  bordered?: boolean;
}

export const ViewAll: React.FC<ViewAllProps> = ({ bordered = true, ...props }) => {
  const { t } = useTranslation();

  return (
    <S.ViewAllBtn size="small" $bordered={bordered} type="text" {...props}>
      {t('nft.viewAll')}
    </S.ViewAllBtn>
  );
};
