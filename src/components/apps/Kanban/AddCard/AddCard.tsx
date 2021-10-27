import React, { useMemo, useState } from 'react';
import { CardWrapper } from 'react-trello/dist/styles/Base';
import { Input } from 'antd';
import { useTranslation } from 'react-i18next';
import { Form } from 'components/common/Form/Form';
import { FormItem } from 'components/common/Form/Form.styles';
import { CardState, Tag } from '../interfaces';
import { ButtonsGroup } from 'components/common/Form/ButtonsGroup/ButtonsGroup';
import { TagDropdown } from './TagDropdown/TagDropdown';
import { addCard } from 'api/kanban.api';

const formInputs = [
  {
    title: 'kanban.title',
    name: 'title',
  },
  {
    title: 'kanban.label',
    name: 'label',
  },
  {
    title: 'kanban.description',
    name: 'description',
  },
];

interface AddCardProps {
  onAdd: (state: CardState) => void;
  onCancel: () => void;
}

export const AddCard: React.FC<AddCardProps> = ({ onAdd, onCancel }) => {
  const [selectedTags, setSelectedTags] = useState<Tag[]>([]);

  const { t } = useTranslation();

  const onFinish = async (values: []) => {
    const tags = selectedTags;

    const card = await addCard({ ...values, tags });

    onAdd(card);
  };

  const formItems = useMemo(
    () =>
      formInputs.map((item, index) => (
        <FormItem key={index} name={item.name}>
          <Input placeholder={t(item.title)} bordered={false} />
        </FormItem>
      )),
    [],
  );

  return (
    <CardWrapper>
      <Form
        name="addCard"
        onFinish={onFinish}
        onCancel={onCancel}
        footer={(loading, onCancel) => <ButtonsGroup size="middle" loading={loading} onCancel={onCancel} />}
        trigger
      >
        {formItems}
        <FormItem>
          <TagDropdown selectedTags={selectedTags} setSelectedTags={setSelectedTags} />
        </FormItem>
      </Form>
    </CardWrapper>
  );
};
