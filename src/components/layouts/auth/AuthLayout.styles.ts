import styled from 'styled-components';
import { Typography } from 'antd';
import loginBackground from 'assets/images/login-bg.webp';
import theme from 'styles/theme';
import { hexToRGB } from 'utils/utils';

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

export const Copyright = styled(Typography.Text)`
  position: absolute;
  bottom: 5px;
  left: 50%;
  transform: translateX(-50%);
  white-space: nowrap;
  font-size: 0.625rem;

  color: ${(props) => hexToRGB(props.theme.colors.text.secondary, 0.7)};

  @media only screen and ${theme.media.xl} {
    color: ${(props) => props.theme.colors.text.light};
  }
`;
