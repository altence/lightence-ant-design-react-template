import React, { useCallback, useState } from 'react';
import { Col, notification, Row, Form } from 'antd';
import { useTranslation } from 'react-i18next';
import { LinkBtn } from 'components/common/LinkBtn/LinkBtn';
import { TwoFactorAuth } from './TwoFactorAuth/TwoFactorAuth';
import { TwoFactorOptions } from './TwoFactorAuth/TwoFactorOptions/TwoFactorOptions';
import * as S from './TwoFactorAuthForm.styles';

export const TwoFactorAuthForm: React.FC = () => {
  const [isEnabled, setEnabled] = useState(false);

  const [form] = Form.useForm();

  const { t } = useTranslation();

  const onFinish = useCallback(
    () => notification.open({ message: t('profile.nav.securitySettings.twoFactorAuthSuccess') }),
    [],
  );

  return (
    <>
      <TwoFactorAuth setEnabled={setEnabled} />
      {isEnabled && (
        <S.AuthForm
          form={form}
          name="twoFactorAuthForm"
          onFinish={onFinish}
          footer={
            <Row align="bottom">
              <Col span={24}>
                <LinkBtn htmlType="submit">{t('profile.nav.securitySettings.verify')}</LinkBtn>
              </Col>
            </Row>
          }
        >
          <Col xs={24} md={12}>
            <TwoFactorOptions form={form} />
          </Col>
        </S.AuthForm>
      )}
    </>
  );
};
