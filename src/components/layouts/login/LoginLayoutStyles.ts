import styled from 'styled-components';
import loginPicture from '../../../assets/images/loginPicture.jpg';

export const LoginLayoutStyled = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
`;

export const LoginBackgroundDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-image: url('${loginPicture}'), linear-gradient(#00c3db 20%, #1f1f1f 20%);
  background-size: cover;
`;

export const LoginLogoDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoginFormDiv = styled.div`
  display: flex;
  justify-items: center;
  align-items: center;
  width: 66vw; ;
`;
