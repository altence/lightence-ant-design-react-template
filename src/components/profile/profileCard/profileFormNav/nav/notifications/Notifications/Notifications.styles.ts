import { media } from '@app/styles/themes/constants';
import { Typography } from 'antd';
import styled from 'styled-components';

export const Description = styled(Typography.Text)`
  display: block;
  font-size: 0.75rem;
  margin-bottom: 1rem;

  @media only screen and ${media.md} {
    font-size: 1rem;
    margin-bottom: 2rem;
  }
`;
