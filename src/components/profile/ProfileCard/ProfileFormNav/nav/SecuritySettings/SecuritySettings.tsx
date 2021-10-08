import React from 'react';
import { Col, Row } from 'antd';
import { useMediaQuery } from 'react-responsive';
import { Card } from 'components/common/Card/Card';
import { PasswordForm } from './PasswordForm/PasswordForm';
import { TwoFactorAuth } from './TwoFactorAuth/TwoFactorAuth';
import theme from 'styles/theme';

export const SecuritySettings: React.FC = () => {
  const isTablet = useMediaQuery({ query: theme.media.md });
  const isDesktop = useMediaQuery({ query: theme.media.xl });

  return (
    <Card padding={isDesktop ? [60, 54] : (isTablet && [40, 30]) || [30, 16]}>
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
};
