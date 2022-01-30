import React from 'react';
import { Col, Row, Switch } from 'antd';
import { useTranslation } from 'react-i18next';
import { BaseButtonsForm } from '@app/components/common/forms/BaseButtonsForm/BaseButtonsForm';

interface TwoFactorSwitchProps {
  setEnabled: (state: boolean) => void;
}

export const TwoFactorSwitch: React.FC<TwoFactorSwitchProps> = ({ setEnabled }) => {
  const { t } = useTranslation();

  return (
    <BaseButtonsForm.Item>
      <Row gutter={[10, 10]} justify="space-between" align="middle">
        <Col span={20}>
          <BaseButtonsForm.Title>{t('profile.nav.securitySettings.twoFactorAuth')}</BaseButtonsForm.Title>
        </Col>
        <Col span={4}>
          <Row justify="end">
            <Col>
              <Switch onChange={setEnabled} />
            </Col>
          </Row>
        </Col>
      </Row>
    </BaseButtonsForm.Item>
  );
};
