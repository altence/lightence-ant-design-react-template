import { Typography } from 'antd';
import styled from 'styled-components';

export const Title = styled(Typography.Text)`
  font-weight: ${(props) => props.theme.commonFontWeight.bold};

  font-size: ${(props) => props.theme.commonFontSizes.lg};
`;
