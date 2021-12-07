import React from 'react';
import { Card as CommonCard } from 'components/common/Card/Card';
import { DynamicForm } from 'components/forms/DynamicForm/DynamicForm';
import { ControlForm } from 'components/forms/ControlForm/ControlForm';
import { ValidationForm } from 'components/forms/ValidationForm/ValidationForm';
import { StepForm } from 'components/forms/StepForm/StepForm';
import { Col } from 'antd';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import theme from 'styles/theme';

const Card = styled(CommonCard)`
  margin-bottom: 1.25rem;
  height: auto;
  align-items: center;

  & .ant-card-head {
    align-self: flex-start;
  }

  & .ant-card-body {
    width: 100%;
    max-width: 35rem;
  }

  @media only screen and ${theme.media.xs} {
    & .ant-card-body {
      padding: 1.25rem 1rem;
    }
  }

  @media only screen and ${theme.media.md} {
    & .ant-card-body {
      padding: 1.25rem 0;
    }
  }
`;
const BigCard = styled(Card)`
  & .ant-card-body {
    max-width: 75rem;
    align-items: center;
  }
`;
const AdvancedFormsPage: React.FC = () => {
  const { t } = useTranslation();
  return (
    <Col span={24}>
      <Card title={t('forms.dynamicForm')} padding="1.25rem">
        <DynamicForm />
      </Card>

      <Card title={t('forms.controlForm')} padding="1.25rem">
        <ControlForm />
      </Card>

      <BigCard title={t('forms.validationForm')} padding="1.25rem">
        <ValidationForm />
      </BigCard>

      <BigCard title={t('forms.stepForm')} padding="1.25rem">
        <StepForm />
      </BigCard>
    </Col>
  );
};

export default AdvancedFormsPage;
