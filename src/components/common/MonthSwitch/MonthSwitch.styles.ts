import { Typography } from 'antd';
import styled from 'styled-components';

export const Text = styled(Typography.Text)`
  font-size: ${(props) => props.theme.commonFontSizes.xs};
`;
