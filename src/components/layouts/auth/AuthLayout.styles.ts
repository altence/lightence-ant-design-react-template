import styled from 'styled-components';
import { Typography } from 'antd';
import loginBackground from '../../../assets/images/login-bg.jpg';
import theme from '../../../styles/theme';

export const Wrapper = styled.div`
  font-family: Poppins, sans-serif;
  height: 100vh;
  width: 100vw;
  display: flex;
`;

export const BackgroundWrapper = styled.div`
  width: 100%;
  height: 100%;
  background: url(${loginBackground});
  background-size: cover;
  position: relative;

  @media only screen and ${theme.media.xl} {
    width: 60%;
  }
`;

export const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

export const Title = styled(Typography.Text)`
  font-size: 2.25rem;
  font-weight: 700;

  color: ${(props) => props.theme.colors.secondary};

  @media only screen and ${theme.media.md} {
    font-size: 4rem;
  }

  @media only screen and ${theme.media.xl} {
    font-size: 4.5rem;
  }
`;

export const Subtitle = styled(Typography.Text)`
  font-size: 1.5rem;
  font-weight: 300;
  margin-bottom: 4.5rem;

  color: ${(props) => props.theme.colors.secondary};

  @media only screen and ${theme.media.md} {
    font-size: 2.25rem;
  }

  @media only screen and ${theme.media.xl} {
    font-size: 2.5rem;
  }
`;

export const FormWrapper = styled.div`
  position: relative;
  width: 40%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Copyright = styled(Typography.Text)`
  position: absolute;
  bottom: 5px;
  left: 50%;
  transform: translateX(-50%);
  white-space: nowrap;
  font-size: 0.625rem;

  color: ${(props) => props.theme.colors.secondaryAlpha};

  @media only screen and ${theme.media.xl} {
    color: ${(props) => props.theme.colors.basic};
  }
`;
