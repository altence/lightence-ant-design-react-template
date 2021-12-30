import React, { useMemo, useState } from 'react';
import { Input } from 'antd';
import { useTranslation } from 'react-i18next';
import { Form } from 'components/common/Form/Form';
import { CardState, Tag, Participant } from '../interfaces';
import { TagDropdown } from './TagDropdown/TagDropdown';
import { addCard } from 'api/kanban.api';
import * as S from './NewCardForm.styles';
import { ParticipantsDropdown } from './ParticipantsDropdown/ParticipantsDropdown';

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

  const { t } = useTranslation();

  const onFinish = async (values: []) => {
    const card = await addCard({ ...values, tags: selectedTags, participants: selectedParticipants });

    onAdd(card);
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
      <Form
        name="addCard"
        onFinish={onFinish}
        onCancel={onCancel}
        footer={(loading, onCancel) => <S.FooterButtons size="small" loading={loading} onCancel={onCancel} />}
        trigger
      >
        {formItems}
        <TagDropdown selectedTags={selectedTags} setSelectedTags={setSelectedTags} />
        <ParticipantsDropdown
          selectedParticipants={selectedParticipants}
          setSelectedParticipants={setSelectedParticipants}
        />
      </Form>
    </S.CardWrapper>
  );
};
