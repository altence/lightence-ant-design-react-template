import React, { useCallback, useState } from 'react';
import { notification } from 'antd';
import { useTranslation } from 'react-i18next';
import { LinkBtn } from 'components/common/LinkBtn/LinkBtn';
import { TwoFactorAuth } from './TwoFactorAuth/TwoFactorAuth';
import { TwoFactorOptions } from './TwoFactorAuth/TwoFactorOptions/TwoFactorOptions';
import { ProfileForm } from '../../../ProfileForm/ProfileForm';

export const TwoFactorAuthForm: React.FC = () => {
  const [isEnabled, setEnabled] = useState(false);

  const { t } = useTranslation();

  const onFinish = useCallback(
    () => notification.open({ message: t('profile.nav.securitySettings.twoFactorAuthSuccess') }),
    [],
  );

  return (
    <>
      <TwoFactorAuth setEnabled={setEnabled} />
      {isEnabled && (
        <ProfileForm
          name="twoFactorAuthForm"
          onFinish={onFinish}
          footer={<LinkBtn htmlType="submit">{t('profile.nav.securitySettings.verify')}</LinkBtn>}
        >
          <TwoFactorOptions />
        </ProfileForm>
      )}
    </>
  );
};
