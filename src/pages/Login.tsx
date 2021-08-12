import React from 'react';
import LoginLogo from '../components/auth/logo/LoginLogo';
import LoginForm from '../components/auth/form/LoginForm';
import LoginLayout from '../components/layouts/login/LoginLayout';

const Login: React.FC = () => {
  return (
    <LoginLayout logo={<LoginLogo />}>
      <LoginForm />
    </LoginLayout>
  );
};

export default Login;
