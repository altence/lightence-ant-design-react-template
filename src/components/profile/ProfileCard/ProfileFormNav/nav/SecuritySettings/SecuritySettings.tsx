import React from 'react';
import { Card } from 'components/common/Card/Card';
import { PasswordForm } from './PasswordForm/PasswordForm';
import { TwoFactorAuthForm } from './TwoFactorAuthForm/TwoFactorAuthForm';

export const SecuritySettings: React.FC = () => {
  return (
    <Card padding="1.875rem 1rem">
      <PasswordForm />
      <TwoFactorAuthForm />
    </Card>
  );
};
