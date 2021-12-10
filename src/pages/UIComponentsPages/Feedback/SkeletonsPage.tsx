import React, { useState } from 'react';
import { Col, Space, Divider, Switch, Form, Radio, RadioChangeEvent } from 'antd';
import {
  Skeleton,
  SkeletonButton,
  SkeletonInput,
  SkeletonAvatar,
  SkeletonImage,
} from 'components/common/Skeleton/Skeleton';
import { useTranslation } from 'react-i18next';
import * as S from '../UIComponentsPage.styles';

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
    <Col>
      <S.Card title={t('skeletons.basic')} padding="1.25rem">
        <Skeleton />
      </S.Card>
      <S.Card title={t('skeletons.complex')} padding="1.25rem">
        <Skeleton avatar paragraph={{ rows: 4 }} />
      </S.Card>
      <S.Card title={t('skeletons.active')} padding="1.25rem">
        <Skeleton active />
      </S.Card>
      <S.Card title={t('skeletons.customization')} padding="1.25rem 0">
        <div>
          <Space>
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
            <Form.Item label={t('skeletons.activeLabel')}>
              <Switch checked={state.active} onChange={handleActiveChange} />
            </Form.Item>
            <Form.Item label={t('skeletons.buttonBlock')}>
              <Switch checked={state.block} onChange={handleBlockChange} />
            </Form.Item>
            <Form.Item label={t('skeletons.size')}>
              <Radio.Group value={state.size} onChange={handleSizeChange}>
                <Radio.Button value="default">{t('skeletons.default')}</Radio.Button>
                <Radio.Button value="large">{t('skeletons.large')}</Radio.Button>
                <Radio.Button value="small">{t('skeletons.small')}</Radio.Button>
              </Radio.Group>
            </Form.Item>
            <Form.Item label={t('skeletons.buttonShape')}>
              <Radio.Group value={state.buttonShape} onChange={handleShapeChange('buttonShape')}>
                <Radio.Button value="default">{t('skeletons.default')}</Radio.Button>
                <Radio.Button value="round">{t('skeletons.round')}</Radio.Button>
                <Radio.Button value="circle">{t('skeletons.circle')}</Radio.Button>
              </Radio.Group>
            </Form.Item>
            <Form.Item label={t('skeletons.avatarShape')}>
              <Radio.Group value={state.avatarShape} onChange={handleShapeChange('avatarShape')}>
                <Radio.Button value="square">{t('skeletons.square')}</Radio.Button>
                <Radio.Button value="circle">{t('skeletons.circle')}</Radio.Button>
              </Radio.Group>
            </Form.Item>
          </Form>
        </div>
      </S.Card>
    </Col>
  );
};

export default SkeletonsPage;
