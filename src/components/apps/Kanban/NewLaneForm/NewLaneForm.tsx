import React from 'react';
import { Input } from 'antd';
import { v4 as uuidv4 } from 'uuid';
import { useTranslation } from 'react-i18next';
import * as S from './NewLaneForm.styles';

interface NewLaneFormProps {
  onAdd: (values: { id: string; title: string }) => void;
  onCancel: () => void;
}

export const NewLaneForm: React.FC<NewLaneFormProps> = ({ onAdd, onCancel }) => {
  const { t } = useTranslation();
  const handleSubmit = async (values: { title: string }) => {
    await onAdd({
      id: uuidv4(),
      title: values.title,
    });
  };

  return (
    <S.Form
      name="addCard"
      onFinish={handleSubmit}
      onCancel={onCancel}
      footer={(loading, onCancel) => <S.FooterButtons size="small" loading={loading} onCancel={onCancel} />}
      trigger
    >
      <S.FormInput name={'title'}>
        <Input placeholder={t('kanban.title')} bordered={false} />
      </S.FormInput>
    </S.Form>
  );
};
