import React, { useState } from 'react';
import { Form } from 'antd';
import { useTranslation } from 'react-i18next';
import { Title } from 'components/profile/ProfileCard/ProfileFormNav/ProfileForm/ProfileForm.styles';
import { CurrentPasswordItem } from './CurrentPasswordItem/CurrentPasswordItem';
import { NewPasswordItem } from './NewPasswordItem/NewPasswordItem';
import { ConfirmItemPassword } from './ConfirmPasswordItem/ConfirmPasswordItem';
import * as S from '../SecuritySettings.styles';

export const PasswordForm: React.FC = () => {
  const [isFieldChange, setFieldChange] = useState(false);

  const { t } = useTranslation();

  return (
    <Form name="password" onFinish={(values) => console.log(values)} onFieldsChange={() => setFieldChange(true)}>
      <Title>{t('profile.nav.securitySettings.changePassword')}</Title>
      <CurrentPasswordItem />
      <NewPasswordItem />
      <ConfirmItemPassword />
      {isFieldChange && (
        <S.Btn type="primary" htmlType="submit">
          {t('common.confirm')}
        </S.Btn>
      )}
    </Form>
  );
};
