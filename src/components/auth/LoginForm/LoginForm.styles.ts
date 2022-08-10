import { media } from '@app/styles/themes/light/lightTheme';
import styled from 'styled-components';

export const LoginDescription = styled.div`
  margin-bottom: 1.875rem;
  color: var(--text-main-color);
  font-size: var(--font-size-xs);

  @media only screen and ${media.xs} {
    margin-bottom: 1.5625rem;
    font-weight: var(--font-weight-bold);
  }

  @media only screen and ${media.md} {
    margin-bottom: 1.75rem;
    font-weight: var(--font-weight-regular);
  }

  @media only screen and ${media.xl} {
    margin-bottom: 1.875rem;
  }
`;

export const RememberMeText = styled.span`
  color: var(--primary-color);
  font-size: var(--font-size-xs);
`;

export const ForgotPasswordText = styled.span`
  color: var(--text-light-color);
  font-size: var(--font-size-xs);
  text-decoration: underline;
`;
