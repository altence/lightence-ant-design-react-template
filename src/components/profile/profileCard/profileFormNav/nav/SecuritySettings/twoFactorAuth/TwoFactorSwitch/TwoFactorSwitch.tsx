import React from 'react';
import { Col, Row, Switch } from 'antd';
import { useTranslation } from 'react-i18next';
import { FormItem, Title } from 'components/common/Form/Form.styles';

interface TwoFactorSwitchProps {
  setEnabled: (state: boolean) => void;
}

export const TwoFactorSwitch: React.FC<TwoFactorSwitchProps> = ({ setEnabled }) => {
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
              <Switch onChange={setEnabled} />
            </Col>
          </Row>
        </Col>
      </Row>
    </FormItem>
  );
};
