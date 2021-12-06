import React from 'react';
import { Card as CommonCard } from 'components/common/Card/Card';
import { DynamicForm } from 'components/forms/DynamicForm/DynamicForm';
import { ControlForm } from 'components/forms/ControlForm/ControlForm';
import { ValidationForm } from 'components/forms/ValidationForm/ValidationForm';
import { AuthFrom } from 'components/forms/AuthForm/AuthForm';
import { Col } from 'antd';
import styled from 'styled-components';

const Card = styled(CommonCard)`
  margin-bottom: 20px;
`;

const AdvancedFormsPage: React.FC = () => {
  return (
    <>
      <Col xl={12}>
        <Card title="Dynamic form" padding="20px">
          <DynamicForm />
        </Card>
        <Card title="Control form" padding="20px">
          <ControlForm />
        </Card>
        <Card title="Validation form" padding="20px">
          <ValidationForm />
        </Card>
        <Card title="Auth form" padding="20px">
          <AuthFrom />
        </Card>
      </Col>
    </>
  );
};

export default AdvancedFormsPage;
