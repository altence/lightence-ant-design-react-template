import styled from 'styled-components';
import { media } from '@app/utils/utils';
import { BaseButton } from '@app/components/common/BaseButton/BaseButton';

export const Description = styled.div`
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

export const SubmitButton = styled(BaseButton)`
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  width: 100%;
  margin-top: 1.125rem;
  margin-bottom: 1rem;
`;
