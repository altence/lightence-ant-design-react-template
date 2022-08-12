import styled from 'styled-components';
import { Typography } from 'antd';
import { media } from '@app/styles/themes/constants';

export const Text = styled(Typography.Paragraph)`
  &.ant-typography {
    font-weight: 400;
    font-size: 0.75rem;
    margin-bottom: 0;

    color: var(--text-main-color);

    @media only screen and ${media.xl} {
      font-size: 0.875rem;
    }
  }
`;
