import styled from 'styled-components';
import { Rate as AntdRate } from 'antd';

export const Rate = styled(AntdRate)`
  font-size: ${(props) => props.theme.commonFontSizes.lg};
`;
