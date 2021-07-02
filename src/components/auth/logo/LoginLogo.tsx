import React from 'react';
import { LogoDiv, LogoText } from './LoginLogoStyles';

const LoginLogo: React.FC = () => {
  return (
    <LogoDiv>
      <h1>
        <LogoText href="/">Altence</LogoText>
      </h1>
    </LogoDiv>
  );
};

export default LoginLogo;
