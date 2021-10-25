import React, { useCallback, useState } from 'react';
import { Button, Col, Input, notification, Row } from 'antd';
import { useTranslation } from 'react-i18next';
import { LeftOutlined } from '@ant-design/icons';
import { Form } from 'components/common/Form/Form';
import { FormItem } from 'components/common/Form/Form.styles';
import { Tag } from 'components/apps/Kanban/interfaces';
import { addTag } from 'api/kanban.api';
import * as S from './AddTag.styles';

const colors = ['green', 'orange', 'gray', 'violet', 'lightgreen', 'pink', 'blue', 'skyblue'];

interface AddTagProps {
  setMain: (state: boolean) => void;
  setTags: (func: (state: Tag[]) => Tag[]) => void;
}

export const AddTag: React.FC<AddTagProps> = ({ setMain, setTags }) => {
  const [selectedColor, setSelectedColor] = useState('');

  const { t } = useTranslation();

  const onFinish = useCallback(
    async (values) => {
      const data = { ...values, bgcolor: selectedColor };

      const tagData = await addTag(data);

      setTags((prev) => {
        if (prev.find((tag) => tag.title === tagData.title)) {
          notification.open({ message: t('kanban.sameTag') });

          return [...prev];
        }

        setMain(true);

        return [...prev, tagData];
      });
    },
    [setTags, selectedColor, setMain],
  );

  return (
    <Form name="addTag" layout="vertical" onFinish={onFinish}>
      <Button type="text" icon={<LeftOutlined />} onClick={() => setMain(true)} />
      <FormItem label={t('common.name')} name="title">
        <Input />
      </FormItem>
      <FormItem>
        <Row gutter={[10, 10]}>
          {colors.map((color, index) => (
            <Col span={6} key={index}>
              <S.ColorWrapper color={color} onClick={() => setSelectedColor(color)} isActive={selectedColor === color}>
                &#10003;
              </S.ColorWrapper>
            </Col>
          ))}
        </Row>
      </FormItem>
    </Form>
  );
};
