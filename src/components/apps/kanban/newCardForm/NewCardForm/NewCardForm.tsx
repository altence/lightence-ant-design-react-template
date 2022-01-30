import React, { useMemo, useState } from 'react';
import { BaseButtonsForm } from '@app/components/common/forms/BaseButtonsForm/BaseButtonsForm';
import { Input } from 'antd';
import { useTranslation } from 'react-i18next';
import { CardState, Tag, Participant } from '../../interfaces';
import { TagDropdown } from '../TagDropdown/TagDropdown';
import * as S from './NewCardForm.styles';
import { ParticipantsDropdown } from '../ParticipantsDropdown/ParticipantsDropdown';

const formInputs = [
  {
    title: 'kanban.title',
    name: 'title',
  },
  {
    title: 'kanban.description',
    name: 'description',
  },
];

interface NewCardFormProps {
  onAdd: (state: CardState) => void;
  onCancel: () => void;
}

export const NewCardForm: React.FC<NewCardFormProps> = ({ onAdd, onCancel }) => {
  const [selectedTags, setSelectedTags] = useState<Tag[]>([]);
  const [selectedParticipants, setSelectedParticipants] = useState<Participant[]>([]);
  const [isLoading, setLoading] = useState(false);

  const { t } = useTranslation();

  const onFinish = (values: []) => {
    setLoading(true);
    setTimeout(() => {
      onAdd({ ...values, tags: selectedTags, participants: selectedParticipants });
      setLoading(false);
    }, 1000);
  };

  const formItems = useMemo(
    () =>
      formInputs.map((item, index) => (
        <S.FormInput key={index} name={item.name}>
          <Input placeholder={t(item.title)} bordered={false} />
        </S.FormInput>
      )),
    [t],
  );

  return (
    <S.CardWrapper>
      <BaseButtonsForm
        name="addCard"
        isFieldsChanged
        footer={<S.FooterButtons loading={isLoading} size="small" onCancel={onCancel} />}
        onFinish={onFinish}
      >
        {formItems}
        <TagDropdown selectedTags={selectedTags} setSelectedTags={setSelectedTags} />
        <ParticipantsDropdown
          selectedParticipants={selectedParticipants}
          setSelectedParticipants={setSelectedParticipants}
        />
      </BaseButtonsForm>
    </S.CardWrapper>
  );
};
