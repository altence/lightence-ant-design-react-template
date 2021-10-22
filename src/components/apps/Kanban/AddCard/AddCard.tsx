import React from 'react';
import { CardHeader, CardWrapper } from 'react-trello/dist/styles/Base';
import { Input, Form as AntForm, Row, Col, Button } from 'antd';
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
        footer={(loading, onCancel) => <ButtonsGroup loading={loading} onCancel={onCancel} cancelBtnType="default" />}
        trigger
      >
        <CardHeader>
          <FormItem name="title">
            <Input placeholder="title" bordered={false} />
          </FormItem>
          <FormItem name="label">
            <Input placeholder="label" bordered={false} />
          </FormItem>
        </CardHeader>
        <FormItem name="description">
          <Input placeholder="description" bordered={false} />
        </FormItem>
        <S.TagWrapper>
          <AntForm.List name="tags">
            {(fields, { add, remove }) => (
              <>
                {fields.map((field) => (
                  <FormItem key={field.key}>
                    <FormItem {...field}>
                      <Input placeholder="title/background" bordered={false} />
                    </FormItem>
                    <S.RemoveCard onClick={() => remove(field.name)} />
                  </FormItem>
                ))}
                <FormItem>
                  <S.Btn size="middle" type="link" onClick={() => add()}>
                    add tag
                  </S.Btn>
                </FormItem>
              </>
            )}
          </AntForm.List>
        </S.TagWrapper>
      </Form>
    </CardWrapper>
  );
};
