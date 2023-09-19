import styled from 'styled-components';
import { Rate as AntRate } from 'antd';

export const Rate = styled(AntRate)`
  font-size: ${({ theme }) => theme.fontSizes.lg};
`;
