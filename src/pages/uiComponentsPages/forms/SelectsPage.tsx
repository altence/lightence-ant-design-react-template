/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { BaseSelect, Option } from '@app/components/common/selects/BaseSelect/BaseSelect';
import { PageTitle } from '@app/components/common/PageTitle/PageTitle';
import * as S from '@app/pages/uiComponentsPages//UIComponentsPage.styles';
import { BaseRadio } from '@app/components/common/BaseRadio/BaseRadio';
import { BaseTag } from '@app/components/common/BaseTag/BaseTag';
import { BaseCol } from '@app/components/common/BaseCol/BaseCol';
import { BaseSpace } from '@app/components/common/BaseSpace/BaseSpace';

type Size = 'small' | 'middle' | 'large';

const SelectsPage: React.FC = () => {
  const { t } = useTranslation();
  const [size, setSize] = useState<Size>('middle');
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
      <BaseTag
        color={value}
        onMouseDown={onPreventMouseDown}
        closable={closable}
        onClose={onClose}
        style={{ marginRight: 3 }}
      >
        {label}
      </BaseTag>
    );
  };

  return (
    <>
      <PageTitle>{t('common.select')}</PageTitle>
      <BaseCol>
        <S.Card title={t('selects.basic')}>
          <BaseSelect defaultValue="lucy" width={120}>
            <Option value="jack">Jack</Option>
            <Option value="lucy">Lucy</Option>
            <Option value="disabled" disabled>
              {t('selects.disabled')}
            </Option>
            <Option value="Yiminghe">Yiminghe</Option>
          </BaseSelect>
          <BaseSelect defaultValue="lucy" width={120} disabled>
            <Option value="lucy">Lucy</Option>
          </BaseSelect>
          <BaseSelect defaultValue="lucy" width={120} loading>
            <Option value="lucy">Lucy</Option>
          </BaseSelect>
          <BaseSelect defaultValue="lucy" width={120} allowClear>
            <Option value="lucy">Lucy</Option>
          </BaseSelect>
        </S.Card>
        <S.Card title={t('selects.multipleSelect')}>
          <BaseSpace direction="vertical" size={10}>
            <BaseSelect
              mode="multiple"
              allowClear
              width={'100%'}
              placeholder={t('selects.pleaseSelect')}
              defaultValue={['a10', 'c12']}
            >
              {children}
            </BaseSelect>
            <BaseSelect mode="multiple" disabled placeholder={t('selects.pleaseSelect')} defaultValue={['a10', 'c12']}>
              {children}
            </BaseSelect>
          </BaseSpace>
        </S.Card>
        <S.Card title={t('selects.selectSizes')}>
          <BaseSpace direction="vertical" size={10}>
            <BaseRadio.Group value={size} onChange={(event) => setSize(event.target.value)}>
              <BaseRadio.Button value="small">{t('selects.small')}</BaseRadio.Button>
              <BaseRadio.Button value="middle">{t('selects.middle')}</BaseRadio.Button>
              <BaseRadio.Button value="large">{t('selects.large')}</BaseRadio.Button>
            </BaseRadio.Group>
            <BaseSelect size={size} defaultValue="a1" width={200}>
              {children}
            </BaseSelect>
            <BaseSelect
              mode="multiple"
              size={size}
              placeholder={t('selects.pleaseSelect')}
              defaultValue={['a10', 'c12']}
              width={'100%'}
            >
              {children}
            </BaseSelect>
            <BaseSelect
              mode="tags"
              size={size}
              placeholder={t('selects.pleaseSelect')}
              defaultValue={['a10', 'c12']}
              width={'100%'}
            >
              {children}
            </BaseSelect>
          </BaseSpace>
        </S.Card>
        <S.Card title={t('selects.customTags')}>
          <BaseSelect
            mode="multiple"
            showArrow
            tagRender={tagRender}
            defaultValue={['gold', 'cyan']}
            width={'100%'}
            options={options}
          />
        </S.Card>
      </BaseCol>
    </>
  );
};

export default SelectsPage;
