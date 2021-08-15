import styled from 'styled-components';
import { Typography } from 'antd';
import { media } from '../../../../styles/theme';
interface TitleProps {
  color: string;
}
interface PercentageProps {
  isDowngrade: boolean;
}

export const Wrapper = styled.div`
  display: flex;
  width: 50%;
  flex-direction: column;

  @media only screen and ${media.md} {
    width: 100%;
  }
`;

export const Title = styled(Typography.Text)<TitleProps>`
  font-weight: 700;
  font-size: 0.875rem;
  margin-bottom: 0.125rem;

  color: ${(props) => props.color};

  @media only screen and ${media.md} {
    font-size: 0.75rem;
    text-align: center;
  }
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

  @media only screen and ${media.md} {
    margin: 0 auto;
  }
`;
