import { Typography } from 'antd';
import styled from 'styled-components';

export const Title = styled(Typography.Text)`
  font-size: ${(props) => props.theme.commonFontSizes.lg};
  font-weight: ${(props) => props.theme.commonFontWeight.bold};
`;

export const Text = styled(Typography.Text)`
  font-size: ${(props) => props.theme.commonFontSizes.xs};
  font-weight: ${(props) => props.theme.commonFontWeight.medium};
`;

export const IconWrapper = styled.span`
  font-size: 0.625rem;
`;
