import React from 'react';
import { PasswordForm } from './PasswordForm/PasswordForm';
import { TwoFactorAuthForm } from './TwoFactorAuthForm/TwoFactorAuthForm';

export const SecuritySettings: React.FC = () => {
  return (
    <>
      <PasswordForm />
      <TwoFactorAuthForm />
    </>
  );
};
