import React, { useCallback, useState } from 'react';
import { Col, Row, Form as AntForm } from 'antd';
import { useTranslation } from 'react-i18next';
import { Form } from '../../../../../../common/Form/Form';
import { LinkBtn } from 'components/common/buttons/LinkBtn/LinkBtn';
import { TwoFactorOptions } from './TwoFactorOptions/TwoFactorOptions';
import { TwoFactorSwitch } from './TwoFactorSwitch/TwoFactorSwitch';

export const TwoFactorAuth: React.FC = () => {
  const [isEnabled, setEnabled] = useState(false);

  const [form] = AntForm.useForm();

  const { t } = useTranslation();

  const onFinish = useCallback(async (values) => {
    const data = await values;

    return data;
  }, []);

  return (
    <Form
      form={form}
      name="twoFactorAuth"
      footer={(loading) =>
        (isEnabled && (
          <LinkBtn loading={loading} htmlType="submit">
            {t('profile.nav.securitySettings.verify')}
          </LinkBtn>
        )) || <span />
      }
      onFinish={onFinish}
    >
      <Row>
        <Col xs={24} md={12} xl={24}>
          <TwoFactorSwitch setEnabled={setEnabled} />
        </Col>

        {isEnabled && (
          <Col span={24}>
            <TwoFactorOptions form={form} />
          </Col>
        )}
      </Row>
    </Form>
  );
};
