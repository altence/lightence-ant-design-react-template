import { Button } from 'components/common/Button/Button';
import React from 'react';
import { useTranslation } from 'react-i18next';
import * as S from './ButtonsGroup.styles';

interface ButtonsGroupProps {
  className?: string;
  onCancel: () => void;
}

export const ButtonsGroup: React.FC<ButtonsGroupProps> = ({ className, onCancel }) => {
  const { t } = useTranslation();

  return (
    <S.Wrapper className={className}>
      <Button type="ghost" onClick={onCancel}>
        {t('common.cancel')}
      </Button>

      <Button htmlType="submit" type="primary">
        {t('common.save')}
      </Button>
    </S.Wrapper>
  );
};
