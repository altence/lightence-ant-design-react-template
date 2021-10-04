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
  margin-bottom: 2rem;
`;

export const ImgWrapper = styled.div`
  width: 6.9375rem;
  margin: 0 auto 1.25rem auto;
  display: flex;
  justify-content: center;
  border-radius: 50%;

  background: ${(props) => props.theme.colors.main.angularGradient};

  & > span {
    margin: 5px;
    width: 100%;
    height: 100%;
  }
`;

export const Title = styled(Typography.Text)`
  font-size: 1.125rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
`;

export const Subtitle = styled(Typography.Text)`
  font-weight: 500;
  margin-bottom: 2rem;
`;

export const FullnessWrapper = styled.div`
  border-radius: 50px;
  height: 1.875rem;
  margin-bottom: 0.625rem;

  background-color: ${(props) => hexToRGB(props.theme.colors.main.additional2, 0.5)};
`;

export const FullnessLine = styled.div<FullnessLineProps>`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 100%;
  padding-right: 0.625rem;
  border-radius: 50px;
  font-weight: 500;

  width: ${(props) => props.width}%;

  background: linear-gradient(
    90deg,
    ${(props) => props.theme.colors.main.additional2} 0%,
    ${(props) => props.theme.colors.main.additional} 100%
  );

  color: ${(props) => props.theme.colors.text.secondary};
`;

export const Text = styled(Typography.Text)`
  font-size: 0.75rem;
  text-align: left;

  color: ${(props) => props.theme.colors.text.light};
`;
