import styled from 'styled-components';
import { Typography } from 'antd';

interface PercentageProps {
  isDowngrade: boolean;
}

export const Wrapper = styled.div`
  line-height: initial;
`;

export const Title = styled(Typography.Text)`
  font-weight: 700;
  font-size: 1.37rem;
  margin-bottom: 0.125rem;

  color: ${(props) => props.theme.colors.primary};
`;

export const Text = styled(Typography.Text)`
  font-size: 0.75rem;
`;

export const PercentageWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Percentage = styled.div<PercentageProps>`
  width: 3rem;
  margin-left: 0.625rem;
  display: flex;
  align-items: center;

  color: ${(props) => (props.isDowngrade && props.theme.colors.fail) || props.theme.colors.success};

  & ${Text} {
    font-weight: 600;
    font-size: unset;
    margin-left: 0.125rem;
    color: ${(props) => (props.isDowngrade && props.theme.colors.fail) || props.theme.colors.success};
  }
`;
