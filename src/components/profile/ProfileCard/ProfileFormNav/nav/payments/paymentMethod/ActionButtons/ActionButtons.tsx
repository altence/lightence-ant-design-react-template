import React from 'react';
import { Button, Popconfirm } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import * as S from './ActionButtons.styles';

interface ActionButtonsProps {
  onRemove: () => void;
}

export const ActionButtons: React.FC<ActionButtonsProps> = ({ onRemove }) => {
  const { t } = useTranslation();

  return (
    <S.BtnWrapper>
      <Popconfirm title={t('common.deleteQuestion')} onConfirm={onRemove}>
        <Button type="link" icon={<DeleteOutlined />} />
      </Popconfirm>
    </S.BtnWrapper>
  );
};
