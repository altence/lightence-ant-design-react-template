import React, { ReactNode } from 'react';
import { useMediaQuery } from 'react-responsive';
import theme from '../../../styles/theme';
import * as S from './LoginLayoutStyles';

export interface LoginLayoutProps {
  logo: ReactNode;
}
const LoginLayout: React.FC<LoginLayoutProps> = ({ logo, children }) => {
  const isDesktop = useMediaQuery({
    query: theme.media.md,
  });

  return (
    <S.LoginLayoutStyled>
      <S.LoginBackgroundContainer>
        <S.LoginLogoContainer>{logo}</S.LoginLogoContainer>
        {!isDesktop && children}
      </S.LoginBackgroundContainer>
      {isDesktop && <S.LoginFormContainer>{children}</S.LoginFormContainer>}
    </S.LoginLayoutStyled>
  );
};

export default LoginLayout;
