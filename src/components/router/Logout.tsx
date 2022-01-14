import React, { useEffect } from 'react';
import { useAppDispatch } from '@app/hooks/reduxHooks';
import { Navigate } from 'react-router-dom';
import { doLogout } from '@app/store/authSlice';

export const Logout: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(doLogout());
  }, [dispatch]);

  return <Navigate to="/auth/login" replace />;
};
