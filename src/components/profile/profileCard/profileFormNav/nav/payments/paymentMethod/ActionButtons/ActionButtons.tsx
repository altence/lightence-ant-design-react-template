import React from 'react';
import { DeleteOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import * as S from './ActionButtons.styles';
import { BaseButton } from '@app/components/common/BaseButton/BaseButton';
import { BasePopconfirm } from '@app/components/common/BasePopconfirm/BasePopconfirm';

interface ActionButtonsProps {
  onRemove: () => void;
}

export const ActionButtons: React.FC<ActionButtonsProps> = ({ onRemove }) => {
  const { t } = useTranslation();

  return (
    <S.BtnWrapper>
      <BasePopconfirm title={t('common.deleteQuestion')} onConfirm={onRemove}>
        <BaseButton type="link" icon={<DeleteOutlined />} />
      </BasePopconfirm>
    </S.BtnWrapper>
  );
};
