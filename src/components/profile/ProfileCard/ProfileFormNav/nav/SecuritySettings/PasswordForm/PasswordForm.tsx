import React from 'react';
import { useTranslation } from 'react-i18next';
import { ProfileForm } from '../../../ProfileForm/ProfileForm';
import { Title } from 'components/profile/ProfileCard/ProfileFormNav/ProfileForm/ProfileForm.styles';
import { CurrentPasswordItem } from './CurrentPasswordItem/CurrentPasswordItem';
import { NewPasswordItem } from './NewPasswordItem/NewPasswordItem';
import { ConfirmItemPassword } from './ConfirmPasswordItem/ConfirmPasswordItem';
import * as S from './PasswordForm.styles';

export const PasswordForm: React.FC = () => {
  const { t } = useTranslation();

  return (
    <ProfileForm
      name="password"
      footer={
        <S.Btn type="primary" htmlType="submit">
          {t('common.confirm')}
        </S.Btn>
      }
    >
      <Title>{t('profile.nav.securitySettings.changePassword')}</Title>
      <CurrentPasswordItem />
      <NewPasswordItem />
      <ConfirmItemPassword />
    </ProfileForm>
  );
};
