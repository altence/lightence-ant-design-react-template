import React from 'react';
import { Col, Row } from 'antd';
import { Card } from 'components/common/Card/Card';
import { PasswordForm } from './passwordForm/PasswordForm/PasswordForm';
import { TwoFactorAuth } from './twoFactorAuth/TwoFactorAuth';

export const SecuritySettings: React.FC = () => (
  <Card>
    <Row gutter={[50, 10]}>
      <Col xs={24} xl={12}>
        <PasswordForm />
      </Col>

      <Col xs={24} xl={12}>
        <TwoFactorAuth />
      </Col>
    </Row>
  </Card>
);
