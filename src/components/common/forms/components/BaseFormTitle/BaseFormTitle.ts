import styled from 'styled-components';
import { Typography } from 'antd';
import { media } from '@app/styles/themes/constants';

export const BaseFormTitle = styled(Typography.Text)`
  font-weight: 700;
  font-size: 1rem;
  display: block;

  @media only screen and ${media.md} {
    font-size: 1.125rem;
  }
`;
