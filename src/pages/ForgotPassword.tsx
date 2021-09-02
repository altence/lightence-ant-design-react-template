import React from 'react';
import LoginLayout from '../components/layouts/login/LoginLayout';
import { ForgotPasswordForm } from '../components/auth/ForgotPasswordForm/ForgotPasswordForm';

const ForgotPassword: React.FC = () => {
  return (
    <LoginLayout>
      <ForgotPasswordForm />
    </LoginLayout>
  );
};

export default ForgotPassword;
