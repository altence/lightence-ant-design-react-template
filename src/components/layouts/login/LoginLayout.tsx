import React, { ReactNode } from 'react';
import { useMediaQuery } from 'react-responsive';
import theme from '../../../styles/theme';
import {
  LoginLayoutStyled,
  LoginBackgroundContainer,
  LoginLogoContainer,
  LoginFormContainer,
} from './LoginLayoutStyles';

export interface LoginLayoutProps {
  logo: ReactNode;
}
const LoginLayout: React.FC<LoginLayoutProps> = ({ logo, children }) => {
  const isDesktop = useMediaQuery({
    query: theme.media.md,
  });

  return (
    <LoginLayoutStyled>
      <LoginBackgroundContainer>
        <LoginLogoContainer>{logo}</LoginLogoContainer>
        {!isDesktop && children}
      </LoginBackgroundContainer>
      {isDesktop && <LoginFormContainer>{children}</LoginFormContainer>}
    </LoginLayoutStyled>
  );
};

export default LoginLayout;
