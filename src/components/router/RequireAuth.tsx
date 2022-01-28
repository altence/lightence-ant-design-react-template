import React, { useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '@app/hooks/reduxHooks';
import { doLogin } from '@app/store/slices/authSlice';
import { initValues } from '../auth/LoginForm/LoginForm';

const RequireAuth: React.FC = ({ children }) => {
  const dispatch = useAppDispatch();
  const token = useAppSelector((state) => state.auth.token);
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      dispatch(doLogin(initValues))
        .unwrap()
        .then(() => navigate('/'));
    }
  }, [token, dispatch, navigate]);

  return token ? <>{children}</> : <Navigate to="/auth/login" replace />;
};

export default RequireAuth;
