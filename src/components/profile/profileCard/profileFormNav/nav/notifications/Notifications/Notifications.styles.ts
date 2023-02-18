import { BaseTypography } from '@app/components/common/BaseTypography/BaseTypography';
import { media } from '@app/styles/themes/constants';
import styled from 'styled-components';

export const Description = styled(BaseTypography.Text)`
  display: block;
  font-size: 0.75rem;
  margin-bottom: 1rem;

  @media only screen and ${media.md} {
    font-size: 1rem;
    margin-bottom: 2rem;
  }
`;
