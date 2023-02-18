import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { UserOutlined, SolutionOutlined, LoadingOutlined, SmileOutlined } from '@ant-design/icons';
import { BaseSteps } from '@app/components/common/BaseSteps/BaseSteps';
import { PageTitle } from '@app/components/common/PageTitle/PageTitle';
import * as S from '@app/pages/uiComponentsPages//UIComponentsPage.styles';
import { BaseCol } from '@app/components/common/BaseCol/BaseCol';
import { BaseSpace } from '@app/components/common/BaseSpace/BaseSpace';

const StepsPage: React.FC = () => {
  const { t } = useTranslation();
  const [current, setCurrent] = useState(0);

  const onChange = (current: number) => {
    setCurrent(current);
  };

  return (
    <>
      <PageTitle>{t('common.steps')}</PageTitle>
      <BaseCol>
        <S.Card title={t('steps.basic')}>
          <BaseSteps
            current={1}
            items={[
              {
                title: t('steps.finished'),
                description: t('steps.description'),
              },
              {
                title: t('steps.inProgress'),
                subTitle: 'Left 00:00:08',
                description: t('steps.description'),
              },
              {
                title: t('steps.waiting'),
                description: t('steps.description'),
              },
            ]}
          />
        </S.Card>
        <S.Card title={t('steps.small')}>
          <BaseSteps
            size="small"
            current={1}
            items={[
              {
                title: t('steps.finished'),
              },
              {
                title: t('steps.inProgress'),
              },
              {
                title: t('steps.waiting'),
              },
            ]}
          />
        </S.Card>
        <S.Card title={t('steps.icons')}>
          <BaseSteps
            items={[
              {
                title: t('steps.login'),
                icon: <UserOutlined />,
              },
              {
                title: t('steps.verification'),
                icon: <SolutionOutlined />,
              },
              {
                title: t('steps.pay'),
                icon: <LoadingOutlined />,
              },
              {
                title: t('steps.done'),
                icon: <SmileOutlined />,
              },
            ]}
          />
        </S.Card>
        <S.Card title={t('steps.vertical')}>
          <BaseSteps
            direction="vertical"
            size="small"
            current={1}
            items={[
              {
                title: t('steps.finished'),
                description: t('steps.description'),
              },
              {
                title: t('steps.inProgress'),
                description: t('steps.description'),
              },
              {
                title: t('steps.waiting'),
                description: t('steps.description'),
              },
            ]}
          />
        </S.Card>
        <S.Card title={t('steps.clickable')}>
          <BaseSpace direction="vertical" size={20}>
            <BaseSteps
              current={current}
              onChange={onChange}
              items={[
                {
                  title: t('steps.step', { number: 1 }),
                  description: t('steps.description'),
                },
                {
                  title: t('steps.step', { number: 2 }),
                  description: t('steps.description'),
                },
                {
                  title: t('steps.step', { number: 3 }),
                  description: t('steps.description'),
                },
              ]}
            />
            <BaseSteps
              current={current}
              onChange={onChange}
              direction="vertical"
              items={[
                {
                  title: t('steps.step', { number: 1 }),
                  description: t('steps.description'),
                },
                {
                  title: t('steps.step', { number: 2 }),
                  description: t('steps.description'),
                },
                {
                  title: t('steps.step', { number: 3 }),
                  description: t('steps.description'),
                },
              ]}
            />
          </BaseSpace>
        </S.Card>
      </BaseCol>
    </>
  );
};

export default StepsPage;
