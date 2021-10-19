import { Button } from 'components/common/buttons/Button/Button';
import React from 'react';
import { useTranslation } from 'react-i18next';
import * as S from './ButtonsGroup.styles';

interface ButtonsGroupProps {
  className?: string;
  onCancel: () => void;
  loading: boolean;
}

export const ButtonsGroup: React.FC<ButtonsGroupProps> = ({ className, onCancel, loading }) => {
  const { t } = useTranslation();

  return (
    <S.Wrapper className={className}>
      <Button type="ghost" onClick={onCancel}>
        {t('common.cancel')}
      </Button>

      <Button loading={loading} htmlType="submit" type="primary">
        {t('common.save')}
      </Button>
    </S.Wrapper>
  );
};
