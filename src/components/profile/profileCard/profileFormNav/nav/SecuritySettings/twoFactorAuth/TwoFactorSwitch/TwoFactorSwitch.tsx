import React from 'react';
import { Col, Row, Switch } from 'antd';
import { useTranslation } from 'react-i18next';
import { BaseButtonsForm } from '@app/components/common/forms/BaseButtonsForm/BaseButtonsForm';

interface TwoFactorSwitchProps {
  isEnabled: boolean;
  setEnabled: (state: boolean) => void;
}

export const TwoFactorSwitch: React.FC<TwoFactorSwitchProps> = ({ isEnabled, setEnabled }) => {
  const { t } = useTranslation();

  return (
    <BaseButtonsForm.Item>
      <Row justify="space-between">
        <Col>
          <BaseButtonsForm.Title>{t('profile.nav.securitySettings.twoFactorAuth')}</BaseButtonsForm.Title>
        </Col>
        <Col>
          <Switch checked={isEnabled} onChange={setEnabled} />
        </Col>
      </Row>
    </BaseButtonsForm.Item>
  );
};
