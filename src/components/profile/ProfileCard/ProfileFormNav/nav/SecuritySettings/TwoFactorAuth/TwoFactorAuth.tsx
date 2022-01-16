import React, { useCallback, useState } from 'react';
import { Col, Row, Form as AntForm } from 'antd';
import { useTranslation } from 'react-i18next';
import { ProfileForm } from '../../../ProfileForm/ProfileForm';
import { TwoFactorOptions } from './TwoFactorOptions/TwoFactorOptions';
import { TwoFactorSwitch } from './TwoFactorSwitch/TwoFactorSwitch';
import { Button } from 'components/common/buttons/Button/Button';

export const TwoFactorAuth: React.FC = () => {
  const [isEnabled, setEnabled] = useState(false);

  const [form] = AntForm.useForm();

  const { t } = useTranslation();

  const onFinish = useCallback(async (values) => console.log(values), []);

  return (
    <ProfileForm
      form={form}
      name="twoFactorAuth"
      footer={(loading) =>
        (isEnabled && (
          <Button type="link" loading={loading} htmlType="submit">
            {t('profile.nav.securitySettings.verify')}
          </Button>
        )) || <span />
      }
      onFinish={onFinish}
    >
      <Row>
        <Col span={24}>
          <TwoFactorSwitch setEnabled={setEnabled} />
        </Col>

        {isEnabled && (
          <Col span={24}>
            <TwoFactorOptions form={form} />
          </Col>
        )}
      </Row>
    </ProfileForm>
  );
};
