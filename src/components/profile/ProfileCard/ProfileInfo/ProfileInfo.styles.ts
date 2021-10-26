import styled from 'styled-components';
import { Typography } from 'antd';
import { hexToRGB } from 'helpers/hexToRGB';

interface FullnessLineProps {
  width: number;
}

export const Wrapper = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
`;

export const ImgWrapper = styled.div`
  width: 6.9375rem;
  margin: 0 auto 1.25rem auto;
  display: flex;
  justify-content: center;
  border-radius: 50%;

  background: ${(props) => props.theme.colors.main.angularGradient};

  @media only screen and ${(props) => props.theme.media.xl} {
    width: 11.125rem;
    margin: 0 auto 2rem auto;
  }

  & > span {
    margin: 5px;
    width: calc(100% - 10px);
    height: calc(100% - 10px);

    @media only screen and ${(props) => props.theme.media.xl} {
      margin: 7px;
    }
  }
`;

export const Title = styled(Typography.Text)`
  font-size: 1.125rem;
  font-weight: 700;
  margin-bottom: 0.5rem;

  @media only screen and ${(props) => props.theme.media.xl} {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
`;

export const Subtitle = styled(Typography.Text)`
  margin-bottom: 2rem;

  @media only screen and ${(props) => props.theme.media.xl} {
    font-weight: 600;
    font-size: 1rem;
    margin-bottom: 2.5rem;
  }
`;

export const FullnessWrapper = styled.div`
  border-radius: 50px;
  height: 1.875rem;
  margin-bottom: 0.625rem;

  background-color: ${(props) => hexToRGB(props.theme.colors.main.warning, 0.5)};

  @media only screen and ${(props) => props.theme.media.xl} {
    height: 2.5rem;
    margin-bottom: 1rem;
  }
`;

export const FullnessLine = styled.div<FullnessLineProps>`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 100%;
  padding-right: 0.625rem;
  border-radius: 50px;

  width: ${(props) => props.width}%;

  background: linear-gradient(
    90deg,
    ${(props) => props.theme.colors.main.warning} 0%,
    ${(props) => props.theme.colors.main.error} 100%
  );

  color: ${(props) => props.theme.colors.text.secondary};

  @media only screen and ${(props) => props.theme.media.xl} {
    font-size: 1rem;
    font-weight: 600;
    padding-right: 0.875rem;
  }
`;

export const Text = styled(Typography.Text)`
  font-size: 0.75rem;
  text-align: left;

  color: ${(props) => props.theme.colors.text.light};

  @media only screen and ${(props) => props.theme.media.md} {
    text-align: center;
  }

  @media only screen and ${(props) => props.theme.media.xl} {
    font-size: 0.875rem;
    text-align: left;
  }
`;
