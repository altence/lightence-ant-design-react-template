import { Typography } from 'antd';
import styled from 'styled-components';

export const ValueText = styled(Typography.Text)`
  font-size: ${(props) => props.theme.commonFontSizes.md};
  font-weight: ${(props) => props.theme.commonFontWeight.semibold};
`;

export const UnitText = styled(Typography.Text)`
  font-size: ${(props) => props.theme.commonFontSizes.xxs};
  font-weight: ${(props) => props.theme.commonFontWeight.semibold};
`;
