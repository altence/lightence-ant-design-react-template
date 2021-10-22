import React from 'react';
import { CardHeader, CardWrapper } from 'react-trello/dist/styles/Base';
import { Input, Form as AntForm } from 'antd';
import { Form } from 'components/common/Form/Form';
import { FormItem } from 'components/common/Form/Form.styles';
import { CardState } from '../interfaces';
import * as S from './AddCard.styles';
import { ButtonsGroup } from 'components/common/Form/ButtonsGroup/ButtonsGroup';

interface AddCardProps {
  onAdd: (state: CardState) => void;
  onCancel: () => void;
}

export const AddCard: React.FC<AddCardProps> = ({ onAdd, onCancel }) => {
  const onFinish = async (values: any) => {
    const tags = values.tags?.map((tag: string) => {
      const tagValues = tag.split('/');

      return { title: tagValues[0], bgcolor: tagValues[1] };
    });

    onAdd({ ...values, tags });
  };

  return (
    <CardWrapper>
      <Form
        name="addCard"
        onFinish={onFinish}
        onCancel={onCancel}
        footer={(loading, onCancel) => <ButtonsGroup size="middle" loading={loading} onCancel={onCancel} />}
        trigger
      >
        <CardHeader>
          <FormItem name="title">
            <Input placeholder="title" />
          </FormItem>
          <FormItem name="label">
            <Input placeholder="label" />
          </FormItem>
        </CardHeader>
        <FormItem name="description">
          <Input placeholder="description" />
        </FormItem>
        <S.TagWrapper>
          <AntForm.List name="tags">
            {(fields, { add, remove }) => (
              <>
                {fields.map((field) => (
                  <FormItem key={field.key}>
                    <FormItem {...field}>
                      <Input placeholder="tag title/tag background" />
                    </FormItem>
                    <S.RemoveCard onClick={() => remove(field.name)} />
                  </FormItem>
                ))}
                <FormItem>
                  <S.AddBtn size="small" type="text" onClick={() => add()}>
                    add tag
                  </S.AddBtn>
                </FormItem>
              </>
            )}
          </AntForm.List>
        </S.TagWrapper>
      </Form>
    </CardWrapper>
  );
};
