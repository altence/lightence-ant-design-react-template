import React from 'react';
import { Card as CommonCard } from 'components/common/Card/Card';
import { DynamicForm } from 'components/forms/DynamicForm/DynamicForm';
import { ControlForm } from 'components/forms/ControlForm/ControlForm';
import { ValidationForm } from 'components/forms/ValidationForm/ValidationForm';
import { AuthFrom } from 'components/forms/AuthForm/AuthForm';
import { Col, Row } from 'antd';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

const Card = styled(CommonCard)`
  margin-bottom: 1.25rem;
  height: auto;
`;

const layouts = {
  xxl: { span: 12, offset: 0 },
  xl: { span: 16, offset: 4 },
  md: { span: 18, offset: 3 },
  xs: { span: 24, offset: 0 },
};

const AdvancedFormsPage: React.FC = () => {
  const { t } = useTranslation();
  return (
    <>
      <Col xl={layouts.xs}>
        <Row gutter={[20, 0]}>
          <Col xs={layouts.xs} md={layouts.md} xl={layouts.xl} xxl={layouts.xxl}>
            <Card title={t('forms.dynamicForm')} padding="1.25rem">
              <DynamicForm />
            </Card>
          </Col>
          <Col xs={layouts.xs} md={layouts.md} xl={layouts.xl} xxl={layouts.xxl}>
            <Card title={t('forms.controlForm')} padding="1.25rem">
              <ControlForm />
            </Card>
          </Col>
        </Row>
        <Row gutter={[20, 0]}>
          <Col xs={layouts.xs} md={layouts.md} xl={layouts.xl} xxl={layouts.xxl}>
            <Card title={t('forms.validationForm')} padding="1.25rem">
              <ValidationForm />
            </Card>
          </Col>
          <Col xs={layouts.xs} md={layouts.md} xl={layouts.xl} xxl={layouts.xxl}>
            <Card title={t('forms.authForm')} padding="1.25rem">
              <AuthFrom />
            </Card>
          </Col>
        </Row>
      </Col>
    </>
  );
};

export default AdvancedFormsPage;
