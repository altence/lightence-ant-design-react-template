import React, { useMemo, useState, useRef } from 'react';
import { Input, Form as AntdForm } from 'antd';
import { useTranslation } from 'react-i18next';
import { Form } from 'components/common/Form/Form';
import { CardState, Tag, Participant } from '../interfaces';
import { TagDropdown } from './TagDropdown/TagDropdown';
import { addCard } from 'api/kanban.api';
import * as S from './NewCardForm.styles';
import { ParticipantsDropdown } from './ParticipantsDropdown/ParticipantsDropdown';
import { useOnClickOutside } from 'hooks/useOnClickOutside';

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
  const [isFormReady, setIsFromReady] = useState(false);
  const [form] = AntdForm.useForm();
  const wrapperRef = useRef(null);

  useOnClickOutside(wrapperRef, () => {
    if (!isFormReady) {
      setIsFromReady(true);
      const values = form.getFieldsValue();
      onFinish(values);
    }
  });

  const { t } = useTranslation();

  const onFinish = async (values: { title?: string; description?: string }) => {
    const card = Object.assign(values, { tags: selectedTags, participants: selectedParticipants });
    onAdd(card);
    await addCard(card);
  };

  const formItems = useMemo(
    () =>
      formInputs.map((item, index) => (
        <S.FormInput key={index} name={item.name}>
          <Input placeholder={t(item.title)} bordered={false} />
        </S.FormInput>
      )),
    [],
  );

  return (
    <S.CardWrapper ref={wrapperRef}>
      <Form form={form} name="addCard" onFinish={onFinish} onCancel={onCancel} trigger footer={() => <></>}>
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
