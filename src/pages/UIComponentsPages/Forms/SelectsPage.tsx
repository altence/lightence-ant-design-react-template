/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';
import { Col, Space, Tag } from 'antd';
import { Select, Option } from 'components/common/selects/Select/Select';
import { RadioGroup, RadioButton, RadioChangeEvent } from 'components/common/Radio/Radio';
import { useTranslation } from 'react-i18next';
import * as S from '../UIComponentsPage.styles';

const SelectsPage: React.FC = () => {
  const { t } = useTranslation();
  const [size, setSize] = useState<'small' | 'middle' | 'large'>('middle');
  const options = [
    { value: t('selects.gold') },
    { value: t('selects.lime') },
    { value: t('selects.green') },
    { value: t('selects.cyan') },
  ];
  const children: React.ReactNode[] = [];

  for (let i = 10; i < 36; i++) {
    children.push(
      <Option key={i.toString(36) + i} value={i.toString(36) + i}>
        {i.toString(36) + i}
      </Option>,
    );
  }

  const handleSizeChange = (e: RadioChangeEvent) => {
    setSize(e.target.value);
  };

  const tagRender = (props: {
    label: string | React.ReactNode;
    value: any;
    closable: boolean;
    onClose: () => void;
  }) => {
    const { label, value, closable, onClose } = props;
    const onPreventMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
      event.preventDefault();
      event.stopPropagation();
    };
    return (
      <Tag
        color={value}
        onMouseDown={onPreventMouseDown}
        closable={closable}
        onClose={onClose}
        style={{ marginRight: 3 }}
      >
        {label}
      </Tag>
    );
  };

  return (
    <Col>
      <S.Card title={t('selects.basic')} padding="1.25rem 0">
        <Select defaultValue="lucy" width={120}>
          <Option value="jack">Jack</Option>
          <Option value="lucy">Lucy</Option>
          <Option value="disabled" disabled>
            {t('selects.disabled')}
          </Option>
          <Option value="Yiminghe">Yiminghe</Option>
        </Select>
        <Select defaultValue="lucy" width={120} disabled>
          <Option value="lucy">Lucy</Option>
        </Select>
        <Select defaultValue="lucy" width={120} loading>
          <Option value="lucy">Lucy</Option>
        </Select>
        <Select defaultValue="lucy" width={120} allowClear>
          <Option value="lucy">Lucy</Option>
        </Select>
      </S.Card>
      <S.Card title={t('selects.multipleSelect')} padding="1.25rem 0">
        <Space direction="vertical" size={10}>
          <Select
            mode="multiple"
            allowClear
            width={'100%'}
            placeholder={t('selects.pleaseSelect')}
            defaultValue={['a10', 'c12']}
          >
            {children}
          </Select>
          <Select mode="multiple" disabled placeholder={t('selects.pleaseSelect')} defaultValue={['a10', 'c12']}>
            {children}
          </Select>
        </Space>
      </S.Card>
      <S.Card title={t('selects.selectSizes')} padding="1.25rem 0">
        <Space direction="vertical" size={10}>
          <RadioGroup value={size} onChange={handleSizeChange}>
            <RadioButton value="small">{t('selects.small')}</RadioButton>
            <RadioButton value="middle">{t('selects.middle')}</RadioButton>
            <RadioButton value="large">{t('selects.large')}</RadioButton>
          </RadioGroup>
          <Select size={size} defaultValue="a1" width={200}>
            {children}
          </Select>
          <Select
            mode="multiple"
            size={size}
            placeholder={t('selects.pleaseSelect')}
            defaultValue={['a10', 'c12']}
            width={'100%'}
          >
            {children}
          </Select>
          <Select
            mode="tags"
            size={size}
            placeholder={t('selects.pleaseSelect')}
            defaultValue={['a10', 'c12']}
            width={'100%'}
          >
            {children}
          </Select>
        </Space>
      </S.Card>
      <S.Card title={t('selects.customTags')}>
        <Select
          mode="multiple"
          showArrow
          tagRender={tagRender}
          defaultValue={['gold', 'cyan']}
          width={'100%'}
          options={options}
        />
      </S.Card>
    </Col>
  );
};

export default SelectsPage;
