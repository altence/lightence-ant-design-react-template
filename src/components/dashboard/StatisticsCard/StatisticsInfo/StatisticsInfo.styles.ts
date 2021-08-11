import styled from 'styled-components';
import { Typography } from 'antd';

interface PercentageProps {
  isDowngrade: boolean;
}

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled(Typography.Text)`
  font-weight: 700;
  font-size: 1.37rem;
  margin-bottom: 0.125rem;

  color: ${(props) => props.theme.colors.primary};
`;

export const Text = styled(Typography.Text)`
  font-weight: 600;
  margin-left: 0.125rem;
`;

export const Percentage = styled.div<PercentageProps>`
  display: flex;
  align-items: center;

  color: ${(props) => (props.isDowngrade && props.theme.colors.fail) || props.theme.colors.success};

  & ${Text} {
    color: ${(props) => (props.isDowngrade && props.theme.colors.fail) || props.theme.colors.success};
  }
`;
