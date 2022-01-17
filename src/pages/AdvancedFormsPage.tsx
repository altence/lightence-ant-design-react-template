import React from 'react';
import { Card } from 'components/common/Card/Card';
import { DynamicForm } from 'components/forms/DynamicForm/DynamicForm';
import { ControlForm } from 'components/forms/ControlForm/ControlForm';
import { ValidationForm } from 'components/forms/ValidationForm/ValidationForm';
import { StepForm } from 'components/forms/StepForm/StepForm';
import { Col, Row } from 'antd';
import { useTranslation } from 'react-i18next';

const AdvancedFormsPage: React.FC = () => {
  const { t } = useTranslation();
  return (
    <Row gutter={[30, 30]}>
      <Col span={24}>
        <Card id="dynamic-form" title={t('forms.dynamicForm')} padding="1.25rem">
          <DynamicForm />
        </Card>
      </Col>

      <Col span={24}>
        <Card id="control-form" title={t('forms.controlForm')} padding="1.25rem">
          <ControlForm />
        </Card>
      </Col>

      <Col span={24}>
        <Card id="validation form" title={t('forms.validationForm')} padding="1.25rem">
          <ValidationForm />
        </Card>
      </Col>

      <Col span={24}>
        <Card id="step-form" title={t('forms.stepForm')} padding="1.25rem">
          <StepForm />
        </Card>
      </Col>
    </Row>
  );
};

export default AdvancedFormsPage;
