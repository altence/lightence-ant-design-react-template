import { useState } from 'react';
import { Col, Space } from 'antd';
import { useTranslation } from 'react-i18next';
import { UserOutlined, SolutionOutlined, LoadingOutlined, SmileOutlined } from '@ant-design/icons';
import { Steps, Step } from '@app/components/common/Steps/Steps';
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
          <Steps current={1}>
            <Step title={t('steps.finished')} description={t('steps.description')} />
            <Step title={t('steps.inProgress')} subTitle="Left 00:00:08" description={t('steps.description')} />
            <Step title={t('steps.waiting')} description={t('steps.description')} />
          </Steps>
        </S.Card>
        <S.Card title={t('steps.small')}>
          <Steps size="small" current={1}>
            <Step title={t('steps.finished')} />
            <Step title={t('steps.inProgress')} />
            <Step title={t('steps.waiting')} />
          </Steps>
        </S.Card>
        <S.Card title={t('steps.icons')}>
          <Steps>
            <Step status="finish" title={t('steps.login')} icon={<UserOutlined />} />
            <Step status="finish" title={t('steps.verification')} icon={<SolutionOutlined />} />
            <Step status="process" title={t('steps.pay')} icon={<LoadingOutlined />} />
            <Step status="wait" title={t('steps.done')} icon={<SmileOutlined />} />
          </Steps>
        </S.Card>
        <S.Card title={t('steps.vertical')}>
          <Steps direction="vertical" size="small" current={1}>
            <Step title={t('steps.finished')} description={t('steps.description')} />
            <Step title={t('steps.inProgress')} description={t('steps.description')} />
            <Step title={t('steps.waiting')} description={t('steps.description')} />
          </Steps>
        </S.Card>
        <S.Card title={t('steps.clickable')}>
          <Space direction="vertical" size={20}>
            <Steps current={current} onChange={onChange}>
              <Step title={t('steps.step', { number: 1 })} description={t('steps.description')} />
              <Step title={t('steps.step', { number: 2 })} description={t('steps.description')} />
              <Step title={t('steps.step', { number: 3 })} description={t('steps.description')} />
            </Steps>
            <Steps current={current} onChange={onChange} direction="vertical">
              <Step title={t('steps.step', { number: 1 })} description={t('steps.description')} />
              <Step title={t('steps.step', { number: 2 })} description={t('steps.description')} />
              <Step title={t('steps.step', { number: 3 })} description={t('steps.description')} />
            </Steps>
          </Space>
        </S.Card>
      </Col>
    </>
  );
};

export default StepsPage;
