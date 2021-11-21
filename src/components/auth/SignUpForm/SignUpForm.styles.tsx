import styled from 'styled-components';
import theme from 'styles/theme';
import { FormTitle } from 'components/layouts/auth/AuthLayout.styles';

export const Title = styled(FormTitle)`
  @media only screen and ${theme.media.xs} {
    margin-bottom: 1.875rem;
  }

  @media only screen and ${theme.media.md} {
    margin-bottom: 1.875rem;
  }

  @media only screen and ${theme.media.xl} {
    margin-bottom: 1.875rem;
  }
`;
