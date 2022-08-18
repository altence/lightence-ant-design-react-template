import { FONT_SIZE, media } from '@app/styles/themes/constants';
import { Row, Typography } from 'antd';
import styled from 'styled-components';

export const WrapperRow = styled(Row)`
  margin-bottom: 1.5rem;

  @media only screen and ${media.xl} {
    margin-bottom: 2.625rem;
  }
`;

export const Title = styled(Typography.Title)`
  &.ant-typography {
    margin-bottom: 0;

    font-size: ${FONT_SIZE.md};

    @media only screen and ${media.xl} {
      font-size: ${FONT_SIZE.lg};
    }
  }
`;
