import { media } from '@app/utils/utils';
import styled from 'styled-components';

export const ImageWrapper = styled.div`
  margin-bottom: 1.875rem;
`;

export const VerifyEmailDescription = styled.div`
  margin-bottom: 1.875rem;
  color: ${({ theme }) => theme.textMain};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: ${({ theme }) => theme.fontWeights.regular};

  @media only screen and (${media('xs')}) {
    font-size: ${({ theme }) => theme.fontSizes.xxs};
  }

  @media only screen and (${media('md')}) {
    font-size: ${({ theme }) => theme.fontSizes.xs};
  }
`;

export const NoCodeText = styled.div`
  margin-top: 1rem;
  color: ${({ theme }) => theme.primary};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  text-decoration: underline;
  cursor: pointer;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
