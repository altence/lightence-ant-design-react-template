import React from 'react';
import { Outlet } from 'react-router-dom';
import * as S from './AuthLayout.styles';

const AuthLayout: React.FC = () => {
  return (
    <S.Wrapper>
      <S.BackgroundWrapper>
        <S.LoginWrapper><Outlet /></S.LoginWrapper>
        {<S.Copyright>2021 &copy; Altence. All Rights Reserved</S.Copyright>}
      </S.BackgroundWrapper>
    </S.Wrapper>
  );
};

export default AuthLayout;
