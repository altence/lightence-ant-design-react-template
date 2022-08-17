import styled from 'styled-components';
import { Typography } from 'antd';
import { media } from '@app/styles/themes/constants';

export const Text = styled(Typography.Title)`
  &.ant-typography {
    font-weight: 600;
    font-size: 0.875rem;
    margin-bottom: 0;

    color: var(--text-main-color);

    @media only screen and ${media.md} {
      font-size: 1rem;
    }

    @media only screen and ${media.xl} {
      font-weight: 700;
      font-size: 1.5rem;
    }
  }
`;
