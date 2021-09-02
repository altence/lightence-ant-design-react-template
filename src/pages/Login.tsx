import React from 'react';
import LoginForm from '../components/LoginForm/LoginForm';
import LoginLayout from '../components/layouts/login/LoginLayout';

const Login: React.FC = () => {
  return (
    <LoginLayout>
      <LoginForm />
    </LoginLayout>
  );
};

export default Login;
