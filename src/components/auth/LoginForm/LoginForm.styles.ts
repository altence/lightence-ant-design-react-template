import styled from 'styled-components';
import { media } from '@app/utils/utils';

export const LoginDescription = styled.div`
  margin-bottom: 1.875rem;
  color: ${({ theme }) => theme.textMain};
  font-size: ${({ theme }) => theme.fontSizes.xs};

  @media only screen and (${media('xs')}) {
    margin-bottom: 1.5625rem;
    font-weight: ${({ theme }) => theme.fontWeights.bold};
  }

  @media only screen and (${media('md')}) {
    margin-bottom: 1.75rem;
    font-weight: ${({ theme }) => theme.fontWeights.regular};
  }

  @media only screen and (${media('xl')}) {
    margin-bottom: 1.875rem;
  }
`;

export const RememberMeText = styled.span`
  color: ${({ theme }) => theme.primary};
  font-size: ${({ theme }) => theme.fontSizes.xs};
`;

export const ForgotPasswordText = styled.span`
  color: ${({ theme }) => theme.textLight};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  text-decoration: underline;
`;
