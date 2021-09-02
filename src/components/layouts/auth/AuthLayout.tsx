import React from 'react';
import { useMediaQuery } from 'react-responsive';
import theme from '../../../styles/theme';
import * as S from './AuthLayout.styles';

const AuthLayout: React.FC = ({ children }) => {
  const isDesktop = useMediaQuery({
    query: theme.media.xl,
  });

  return (
    <S.Wrapper>
      <S.BackgroundWrapper>
        <S.LoginWrapper>
          <S.Title>Altence</S.Title>
          <S.Subtitle>Masakra</S.Subtitle>
          {!isDesktop && children}
        </S.LoginWrapper>
        {!isDesktop && <S.Copyright>2021 &copy; Altence. All Rights Reserved</S.Copyright>}
      </S.BackgroundWrapper>
      {isDesktop && (
        <S.FormWrapper>
          {children}
          <S.Copyright>2021 &copy; Altence. All Rights Reserved</S.Copyright>
        </S.FormWrapper>
      )}
    </S.Wrapper>
  );
};

export default AuthLayout;
