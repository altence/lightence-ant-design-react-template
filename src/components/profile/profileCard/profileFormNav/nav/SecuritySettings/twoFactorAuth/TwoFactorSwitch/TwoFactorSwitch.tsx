import React from 'react';
import { Col, Row, Switch } from 'antd';
import { useTranslation } from 'react-i18next';
import { FormItem, Title } from '@app/components/common/Form/Form.styles';

interface TwoFactorSwitchProps {
  isEnabled: boolean;
  setEnabled: (state: boolean) => void;
}

export const TwoFactorSwitch: React.FC<TwoFactorSwitchProps> = ({ isEnabled, setEnabled }) => {
  const { t } = useTranslation();

  return (
    <FormItem>
      <Row gutter={[10, 10]} justify="space-between" align="middle">
        <Col span={20}>
          <Title>{t('profile.nav.securitySettings.twoFactorAuth')}</Title>
        </Col>
        <Col span={4}>
          <Row justify="end">
            <Col>
              <FormItem name="2fa">
                <Switch checked={isEnabled} onChange={setEnabled} />
              </FormItem>
            </Col>
          </Row>
        </Col>
      </Row>
    </FormItem>
  );
};
