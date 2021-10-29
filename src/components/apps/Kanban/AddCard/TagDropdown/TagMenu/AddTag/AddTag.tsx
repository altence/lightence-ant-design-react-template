import React, { useCallback, useMemo, useState } from 'react';
import { Col, Input, notification, Row } from 'antd';
import { useTranslation } from 'react-i18next';
import { LeftOutlined } from '@ant-design/icons';
import { Form } from 'components/common/Form/Form';
import { FormItem } from 'components/common/Form/Form.styles';
import { Tag } from 'components/apps/Kanban/interfaces';
import { addTag } from 'api/kanban.api';
import theme from 'styles/theme';
import * as S from './AddTag.styles';

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

  const colorsItems = useMemo(
    () =>
      Object.values(theme.commonColors).map((color, index) => (
        <Col span={6} key={index}>
          <S.ColorWrapper color={color} onClick={() => setSelectedColor(color)} isActive={selectedColor === color}>
            &#10003;
          </S.ColorWrapper>
        </Col>
      )),
    [selectedColor, setSelectedColor],
  );

  return (
    <Form name="addTag" layout="vertical" onFinish={onFinish}>
      <Row gutter={[20, 20]}>
        <Col span={24}>
          <LeftOutlined onClick={() => setMain(true)} />
        </Col>
        <Col span={24}>
          <FormItem label={t('common.name')} name="title">
            <Input />
          </FormItem>
        </Col>
        <Col span={24}>
          <FormItem>
            <Row gutter={[10, 10]}>{colorsItems}</Row>
          </FormItem>
        </Col>
      </Row>
    </Form>
  );
};
