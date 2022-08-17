import styled from 'styled-components';
import { Typography } from 'antd';
import { media } from '@app/styles/themes/constants';

export const Text = styled(Typography.Title)`
  &.ant-typography {
    font-weight: 700;
    font-size: 1rem;
    margin-bottom: 0;

    color: var(--text-main-color);

    @media only screen and ${media.md} {
      font-size: 1.125rem;
    }

    @media only screen and ${media.xl} {
      font-weight: 800;
      font-size: 1.625rem;
    }
  }
`;
