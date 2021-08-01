import styled from 'styled-components';
import loginPicture from '../../../assets/images/loginPicture.jpg';

export const LoginLayoutStyled = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
`;

export const LoginBackgroundContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-image: url('${loginPicture}');
  background-size: cover;
`;

export const LoginLogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoginFormContainer = styled.div`
  display: flex;
  justify-items: center;
  align-items: center;
  width: 66vw;
`;
