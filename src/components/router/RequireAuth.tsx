import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAppSelector } from '@app/hooks/reduxHooks';

const RequireAuth: React.FC = ({ children }) => {
  const token = useAppSelector((state) => state.auth.token);

  return token ? <>{children}</> : <Navigate to="/auth/login" replace />;
};

export default RequireAuth;
