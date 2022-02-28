import { Row, Typography } from 'antd';
import styled from 'styled-components';

export const WrapperRow = styled(Row)`
  padding-bottom: 0.875rem;
  border-bottom: ${(props) => `0.2px solid ${props.theme.colors.border.nft}`};
`;

export const Title = styled(Typography.Title)`
  &.ant-typography {
    margin-bottom: 0;
    font-size: ${(props) => props.theme.commonFontSizes.md};
  }
`;
