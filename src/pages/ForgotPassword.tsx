import React from 'react';
import AuthLayout from '../components/layouts/auth/AuthLayout';
import { ForgotPasswordForm } from '../components/auth/ForgotPasswordForm/ForgotPasswordForm';

const ForgotPassword: React.FC = () => {
  return (
    <AuthLayout>
      <ForgotPasswordForm />
    </AuthLayout>
  );
};

export default ForgotPassword;
