import React from 'react';
import { Col, Row } from 'antd';
import { Card } from 'components/common/Card/Card';
import { PasswordForm } from './PasswordForm/PasswordForm';
import { TwoFactorAuth } from './TwoFactorAuth/TwoFactorAuth';

export const SecuritySettings: React.FC = () => (
  <Card>
    <Row gutter={[30, 0]}>
      <Col xs={24} xl={10}>
        <PasswordForm />
      </Col>

      <Col xs={24} xl={14}>
        <TwoFactorAuth />
      </Col>
    </Row>
  </Card>
);
