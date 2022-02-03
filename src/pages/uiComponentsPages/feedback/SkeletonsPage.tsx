import React, { useState } from 'react';
import { Col, Space, Divider, Switch, Form, Radio, RadioChangeEvent } from 'antd';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import {
  Skeleton,
  SkeletonButton,
  SkeletonInput,
  SkeletonAvatar,
  SkeletonImage,
} from '@app/components/common/Skeleton/Skeleton';
import { PageTitle } from '@app/components/common/PageTitle/PageTitle';
import * as S from '@app/pages/uiComponentsPages//UIComponentsPage.styles';

const FormItem = styled(Form.Item)`
  @media only screen and ${(props) => props.theme.media.xs} {
    max-width: fit-content;
  }

  @media only screen and ${(props) => props.theme.media.md} {
    max-width: 100%;
  }
`;

const SkeletonsPage: React.FC = () => {
  const { t } = useTranslation();
  const [state, setState] = useState<{
    active: boolean;
    block: boolean;
    size?: 'default' | 'large' | 'small';
    buttonShape?: 'circle' | 'square' | 'round';
    avatarShape?: 'circle' | 'square';
  }>({
    active: false,
    block: false,
    size: 'default',
  });

  const handleActiveChange = (checked: boolean) => {
    setState({ ...state, active: checked });
  };

  const handleBlockChange = (checked: boolean) => {
    setState({ ...state, block: checked });
  };

  const handleSizeChange = (e: RadioChangeEvent) => {
    setState({ ...state, size: e.target.value });
  };

  const handleShapeChange = (prop: string) => (e: RadioChangeEvent) => {
    setState({ ...state, [prop]: e.target.value });
  };

  return (
    <>
      <PageTitle>{t('common.skeleton')}</PageTitle>
      <Col>
        <S.Card title={t('skeletons.basic')}>
          <Skeleton />
        </S.Card>
        <S.Card title={t('skeletons.complex')}>
          <Skeleton avatar paragraph={{ rows: 4 }} />
        </S.Card>
        <S.Card title={t('skeletons.active')}>
          <Skeleton active />
        </S.Card>
        <S.Card title={t('skeletons.customization')}>
          <div>
            <Space wrap>
              <SkeletonButton active={state.active} size={state.size} shape={state.buttonShape} block={state.block} />
              <SkeletonAvatar active={state.active} size={state.size} shape={state.avatarShape} />
              <SkeletonInput style={{ width: 200 }} active={state.active} size={state.size} />
            </Space>
            <br />
            <br />
            <SkeletonButton active={state.active} size={state.size} shape={state.buttonShape} block={state.block} />
            <br />
            <br />
            <SkeletonImage />
            <Divider />
            <Form layout="inline">
              <FormItem label={t('skeletons.activeLabel')}>
                <Switch checked={state.active} onChange={handleActiveChange} />
              </FormItem>
              <FormItem label={t('skeletons.buttonBlock')}>
                <Switch checked={state.block} onChange={handleBlockChange} />
              </FormItem>
              <FormItem label={t('skeletons.size')}>
                <Radio.Group value={state.size} onChange={handleSizeChange}>
                  <Radio.Button value="default">{t('skeletons.default')}</Radio.Button>
                  <Radio.Button value="large">{t('skeletons.large')}</Radio.Button>
                  <Radio.Button value="small">{t('skeletons.small')}</Radio.Button>
                </Radio.Group>
              </FormItem>
              <FormItem label={t('skeletons.buttonShape')}>
                <Radio.Group value={state.buttonShape} onChange={handleShapeChange('buttonShape')}>
                  <Radio.Button value="default">{t('skeletons.default')}</Radio.Button>
                  <Radio.Button value="round">{t('skeletons.round')}</Radio.Button>
                  <Radio.Button value="circle">{t('skeletons.circle')}</Radio.Button>
                </Radio.Group>
              </FormItem>
              <FormItem label={t('skeletons.avatarShape')}>
                <Radio.Group value={state.avatarShape} onChange={handleShapeChange('avatarShape')}>
                  <Radio.Button value="square">{t('skeletons.square')}</Radio.Button>
                  <Radio.Button value="circle">{t('skeletons.circle')}</Radio.Button>
                </Radio.Group>
              </FormItem>
            </Form>
          </div>
        </S.Card>
      </Col>
    </>
  );
};

export default SkeletonsPage;
