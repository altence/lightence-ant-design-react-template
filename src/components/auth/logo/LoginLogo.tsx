import React from 'react';
import * as S from './LoginLogoStyles';

const LoginLogo: React.FC = () => {
  return (
    <S.LogoDiv>
      <h1>
        <S.CompanyLogo href="/">Altence</S.CompanyLogo>
      </h1>
      <h2>
        <S.LogoText href="/">Masakra</S.LogoText>
      </h2>
    </S.LogoDiv>
  );
};

export default LoginLogo;
