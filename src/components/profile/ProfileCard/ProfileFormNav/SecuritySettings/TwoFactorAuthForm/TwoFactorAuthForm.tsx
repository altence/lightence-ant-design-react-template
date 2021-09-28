import React, { useState } from 'react';
import { Form, notification } from 'antd';
import { useTranslation } from 'react-i18next';
import { TwoFactorAuth } from './TwoFactorAuth/TwoFactorAuth';
import { TwoFactorOptions } from './TwoFactorAuth/TwoFactorOptions/TwoFactorOptions';
import { LinkBtn } from 'components/common/LinkBtn/LinkBtn';

export const TwoFactorAuthForm: React.FC = () => {
  const [isFieldsChange, setFieldsChange] = useState(false);
  const [isEnabled, setEnabled] = useState(false);

  const { t } = useTranslation();

  return (
    <>
      <TwoFactorAuth setEnabled={setEnabled} />
      {isEnabled && (
        <Form
          name="twoFactorAuthForm"
          onFinish={() => notification.open({ message: t('profile.nav.securitySettings.twoFactorAuthSuccess') })}
          onFieldsChange={() => setFieldsChange(true)}
          onFinishFailed={(error) =>
            notification.open({
              message: `${t('profile.nav.securitySettings.twoFactorAuthSuccess')}: ${error.errorFields.map(
                (item) => item.errors,
              )}`,
            })
          }
        >
          <TwoFactorOptions />
          {isFieldsChange && <LinkBtn htmlType="submit">Verify</LinkBtn>}
        </Form>
      )}
    </>
  );
};
