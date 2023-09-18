import styled from 'styled-components';
import * as Auth from '@app/components/layouts/AuthLayout/AuthLayout.styles';
import { media } from '@app/utils/utils';

export const FormItem = styled(Auth.FormItem)`
  margin-bottom: 1rem;
`;

export const AvatarCircle = styled.div`
  border-radius: 50%;
  background: ${({ theme }) => theme.background};
  padding: 1px;
  margin-bottom: 1rem;
  @media only screen and (${media('xs')}) {
    height: 3.6875rem;
    width: 3.6875rem;
  }

  @media only screen and (${media('md')}) {
    height: 4.8125rem;
    width: 4.8125rem;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Time = styled.div`
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.textMain};

  @media only screen and (${media('xs')}) {
    margin-bottom: 0.625rem;
    line-height: 1.5625rem;
    font-size: ${({ theme }) => theme.fontSizes.lg};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
  }

  @media only screen and (${media('md')}) {
    margin-bottom: 1rem;
    line-height: 2.125rem;
    font-size: ${({ theme }) => theme.fontSizes.xxxl};
    font-weight: ${({ theme }) => theme.fontWeights.extraBold};
  }
`;

export const Date = styled.div`
  margin-bottom: 2.5rem;
  color: ${({ theme }) => theme.textMain};

  @media only screen and (${media('xs')}) {
    margin-bottom: 3.4375rem;
    line-height: 1.25rem;
    font-size: ${({ theme }) => theme.fontSizes.xs};
    font-weight: ${({ theme }) => theme.fontWeights.semibold};
  }

  @media only screen and (${media('md')}) {
    margin-bottom: 2.5rem;
    line-height: 1.5rem;
    font-size: ${({ theme }) => theme.fontSizes.xxl};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
  }
`;

export const Name = styled.div`
  margin-bottom: 1.5625rem;
  color: ${({ theme }) => theme.textMain};

  @media only screen and (${media('xs')}) {
    font-size: ${({ theme }) => theme.fontSizes.xs};
    font-weight: ${({ theme }) => theme.fontWeights.semibold};
  }

  @media only screen and (${media('md')}) {
    font-size: ${({ theme }) => theme.fontSizes.md};
  }
`;
