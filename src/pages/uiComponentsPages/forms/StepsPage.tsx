import { useState } from 'react';
import { Col, Space } from 'antd';
import { useTranslation } from 'react-i18next';
import { UserOutlined, SolutionOutlined, LoadingOutlined, SmileOutlined } from '@ant-design/icons';
import { Steps } from '@app/components/common/Steps/Steps';
import { PageTitle } from '@app/components/common/PageTitle/PageTitle';
import * as S from '@app/pages/uiComponentsPages//UIComponentsPage.styles';

const StepsPage: React.FC = () => {
  const { t } = useTranslation();
  const [current, setCurrent] = useState(0);

  const onChange = (current: number) => {
    setCurrent(current);
  };

  return (
    <>
      <PageTitle>{t('common.steps')}</PageTitle>
      <Col>
        <S.Card title={t('steps.basic')}>
          <Steps
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
          <Steps
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
          <Steps
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
          <Steps
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
          <Space direction="vertical" size={20}>
            <Steps
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
            <Steps
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
          </Space>
        </S.Card>
      </Col>
    </>
  );
};

export default StepsPage;
