import styled from 'styled-components';
import { Typography } from 'antd';
interface TitleProps {
  color: string;
}
interface PercentageProps {
  isDowngrade: boolean;
}

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled(Typography.Text)<TitleProps>`
  font-weight: 700;
  font-size: 0.875rem;
  margin-bottom: 0.125rem;

  color: ${(props) => props.color};
`;

export const Text = styled(Typography.Text)`
  font-weight: 600;
  font-size: 0.625rem;
  margin-left: 0.125rem;
`;

export const Percentage = styled.div<PercentageProps>`
  display: flex;
  align-items: center;

  color: ${(props) => (props.isDowngrade && props.theme.colors.error) || props.theme.colors.success};

  & ${Text} {
    color: ${(props) => (props.isDowngrade && props.theme.colors.error) || props.theme.colors.success};
  }
`;
