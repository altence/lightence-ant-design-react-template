import React from 'react';
import { Button, Popconfirm } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import * as S from './ActionButtons.styles';

interface ActionButtonsProps {
  onEdit: () => void;
  onRemove: () => void;
}

export const ActionButtons: React.FC<ActionButtonsProps> = ({ onEdit, onRemove }) => {
  const { t } = useTranslation();

  return (
    <S.BtnWrapper>
      <Button type="link" icon={<EditOutlined />} onClick={onEdit} />
      <Popconfirm title={t('common.deleteQuestion')} onConfirm={onRemove}>
        <Button type="link" icon={<DeleteOutlined />} />
      </Popconfirm>
    </S.BtnWrapper>
  );
};
