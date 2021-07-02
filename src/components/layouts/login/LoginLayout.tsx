import React, { ReactNode } from 'react';
import { useMediaQuery } from 'react-responsive';
import theme from '../../../styles/theme';
import { LoginLayoutStyled, LoginBackgroundDiv, LoginLogoDiv, LoginFormDiv } from './LoginLayoutStyles';

export interface LoginLayoutProps {
  logo: ReactNode;
}
const LoginLayout: React.FC<LoginLayoutProps> = ({ logo, children }) => {
  const isDesktop = useMediaQuery({
    query: theme.media.md,
  });

  return (
    <LoginLayoutStyled>
      <LoginBackgroundDiv>
        <LoginLogoDiv>{logo}</LoginLogoDiv>
        {!isDesktop && children}
      </LoginBackgroundDiv>
      {isDesktop && <LoginFormDiv>{children}</LoginFormDiv>}
    </LoginLayoutStyled>
  );
};

export default LoginLayout;
