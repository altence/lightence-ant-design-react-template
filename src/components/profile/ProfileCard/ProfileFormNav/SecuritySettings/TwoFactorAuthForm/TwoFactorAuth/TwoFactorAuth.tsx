import React from 'react';
import { Switch } from 'antd';
import { useTranslation } from 'react-i18next';
import { Title } from 'components/profile/ProfileCard/ProfileForm/ProfileForm.styles';
import * as S from './TwoFactorAuth.styles';

interface TwoFactorAuthProps {
  setEnabled: (state: boolean) => void;
}

export const TwoFactorAuth: React.FC<TwoFactorAuthProps> = ({ setEnabled }) => {
  const { t } = useTranslation();

  return (
    <>
      <S.Wrapper>
        <Title>{t('profile.nav.securitySettings.twoFactorAuth')}</Title>
        <Switch onChange={setEnabled} />
      </S.Wrapper>
    </>
  );
};
