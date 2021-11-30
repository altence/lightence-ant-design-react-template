import { Rate, Typography } from 'antd';
import styled from 'styled-components';

export const Title = styled(Typography.Text)`
  display: block;
  line-height: 1.15;
  font-weight: ${(props) => props.theme.commonFontWeight.semibold};

  font-size: ${(props) => props.theme.commonFontSizes.xs};

  color: ${(props) => props.theme.colors.main.primary};
`;

export const Text = styled(Typography.Text)`
  display: block;
  line-height: 1.15;

  font-weight: ${(props) => props.theme.commonFontWeight.semibold};

  font-size: ${(props) => props.theme.commonFontSizes.md};
`;

export const Rating = styled(Rate)`
  display: flex;
  line-height: 1.15;
`;
