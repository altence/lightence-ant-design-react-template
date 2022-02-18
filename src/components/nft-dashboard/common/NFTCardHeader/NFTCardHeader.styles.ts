import { Row, Typography } from 'antd';
import styled from 'styled-components';

export const WrapperRow = styled(Row)`
  margin-bottom: 1.5rem;

  @media only screen and ${(props) => props.theme.media.xl} {
    margin-bottom: 2.625rem;
  }
`;

export const Title = styled(Typography.Title)`
  &.ant-typography {
    margin-bottom: 0;

    font-size: ${(props) => props.theme.commonFontSizes.md};

    @media only screen and ${(props) => props.theme.media.xl} {
      font-size: ${(props) => props.theme.commonFontSizes.lg};
    }
  }
`;
