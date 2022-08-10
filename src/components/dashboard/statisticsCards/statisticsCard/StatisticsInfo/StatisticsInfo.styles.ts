import { media } from '@app/styles/themes/light/lightTheme';
import { Typography } from 'antd';
import styled from 'styled-components';

export const Title = styled(Typography.Text)`
  font-size: var(--font-size-xs);
  font-weight: var(--font-weight-bold);

  @media only screen and ${media.md} {
    font-size: var(--font-size-md);
  }

  @media only screen and ${media.xl} {
    font-size: var(--font-size-lg);
  }
`;

export const Text = styled(Typography.Text)`
  font-size: var(--font-size-xs);
  font-weight: var(--font-weight-medium);
`;

export const IconWrapper = styled.span`
  font-size: 0.625rem;
`;
