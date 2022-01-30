import React, { useCallback, useState } from 'react';
import { Col, Row, Form as AntForm } from 'antd';
import { useTranslation } from 'react-i18next';
import { BaseButtonsForm } from '@app/components/common/forms/BaseButtonsForm/BaseButtonsForm';
import { Button } from '@app/components/common/buttons/Button/Button';
import { TwoFactorOptions } from '@app/components/profile/profileCard/profileFormNav/nav/SecuritySettings/twoFactorAuth/TwoFactorOptions/TwoFactorOptions';
import { TwoFactorSwitch } from '@app/components/profile/profileCard/profileFormNav/nav/SecuritySettings/twoFactorAuth/TwoFactorSwitch/TwoFactorSwitch';
import { notificationController } from '@app/controllers/notificationController';

export const TwoFactorAuth: React.FC = () => {
  const [isEnabled, setEnabled] = useState(false);
  const [isFieldsChanged, setFieldsChanged] = useState(false);
  const [isLoading, setLoading] = useState(false);

  const [form] = AntForm.useForm();

  const { t } = useTranslation();

  const onFinish = useCallback(
    (values) => {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setFieldsChanged(false);
        notificationController.success({ message: t('common.success') });
        console.log(values);
      });
    },
    [t],
  );

  return (
    <BaseButtonsForm
      form={form}
      name="twoFactorAuth"
      requiredMark="optional"
      isFieldsChanged={isFieldsChanged}
      onFieldsChange={() => setFieldsChanged(true)}
      footer={
        (isEnabled && (
          <Button type="link" loading={isLoading} htmlType="submit">
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
    </BaseButtonsForm>
  );
};
