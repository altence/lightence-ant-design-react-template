/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { BaseSkeleton } from '@app/components/common/BaseSkeleton/BaseSkeleton';
import { PageTitle } from '@app/components/common/PageTitle/PageTitle';
import * as S from '@app/pages/uiComponentsPages//UIComponentsPage.styles';
import { media } from '@app/styles/themes/constants';
import { BaseSwitch } from '@app/components/common/BaseSwitch/BaseSwitch';
import { BaseForm } from '@app/components/common/forms/BaseForm/BaseForm';
import { BaseCol } from '@app/components/common/BaseCol/BaseCol';
import { BaseSpace } from '@app/components/common/BaseSpace/BaseSpace';
import { BaseDivider } from '@app/components/common/BaseDivider/BaseDivider';
import { BaseRadio } from '@app/components/common/BaseRadio/BaseRadio';

type Size = 'default' | 'large' | 'small';

const FormItem = styled(BaseForm.Item)`
  @media only screen and ${media.xs} {
    max-width: fit-content;
  }

  @media only screen and ${media.md} {
    max-width: 100%;
  }
`;

const SkeletonsPage: React.FC = () => {
  const { t } = useTranslation();
  const [state, setState] = useState<{
    active: boolean;
    block: boolean;
    size?: Size;
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

  const handleSizeChange = (e: any) => {
    setState({ ...state, size: e.target.value as Size });
  };

  const handleShapeChange = (prop: string) => (e: any) => {
    setState({ ...state, [prop]: e.target.value });
  };

  return (
    <>
      <PageTitle>{t('common.skeleton')}</PageTitle>
      <BaseCol>
        <S.Card title={t('skeletons.basic')}>
          <BaseSkeleton />
        </S.Card>
        <S.Card title={t('skeletons.complex')}>
          <BaseSkeleton avatar paragraph={{ rows: 4 }} />
        </S.Card>
        <S.Card title={t('skeletons.active')}>
          <BaseSkeleton active />
        </S.Card>
        <S.Card title={t('skeletons.customization')}>
          <div>
            <BaseSpace wrap>
              <BaseSkeleton.Button
                active={state.active}
                size={state.size}
                shape={state.buttonShape}
                block={state.block}
              />
              <BaseSkeleton.Avatar active={state.active} size={state.size} shape={state.avatarShape} />
              <BaseSkeleton.Input style={{ width: 200 }} active={state.active} size={state.size} />
            </BaseSpace>
            <br />
            <br />
            <BaseSkeleton.Button
              active={state.active}
              size={state.size}
              shape={state.buttonShape}
              block={state.block}
            />
            <br />
            <br />
            <BaseSkeleton.Image />
            <BaseDivider />
            <BaseForm layout="inline">
              <FormItem label={t('skeletons.activeLabel')}>
                <BaseSwitch checked={state.active} onChange={handleActiveChange} />
              </FormItem>
              <FormItem label={t('skeletons.buttonBlock')}>
                <BaseSwitch checked={state.block} onChange={handleBlockChange} />
              </FormItem>
              <FormItem label={t('skeletons.size')}>
                <BaseRadio.Group value={state.size} onChange={handleSizeChange}>
                  <BaseRadio.Button value="default">{t('skeletons.default')}</BaseRadio.Button>
                  <BaseRadio.Button value="large">{t('skeletons.large')}</BaseRadio.Button>
                  <BaseRadio.Button value="small">{t('skeletons.small')}</BaseRadio.Button>
                </BaseRadio.Group>
              </FormItem>
              <FormItem label={t('skeletons.buttonShape')}>
                <BaseRadio.Group value={state.buttonShape} onChange={handleShapeChange('buttonShape')}>
                  <BaseRadio.Button value="default">{t('skeletons.default')}</BaseRadio.Button>
                  <BaseRadio.Button value="round">{t('skeletons.round')}</BaseRadio.Button>
                  <BaseRadio.Button value="circle">{t('skeletons.circle')}</BaseRadio.Button>
                </BaseRadio.Group>
              </FormItem>
              <FormItem label={t('skeletons.avatarShape')}>
                <BaseRadio.Group value={state.avatarShape} onChange={handleShapeChange('avatarShape')}>
                  <BaseRadio.Button value="square">{t('skeletons.square')}</BaseRadio.Button>
                  <BaseRadio.Button value="circle">{t('skeletons.circle')}</BaseRadio.Button>
                </BaseRadio.Group>
              </FormItem>
            </BaseForm>
          </div>
        </S.Card>
      </BaseCol>
    </>
  );
};

export default SkeletonsPage;
