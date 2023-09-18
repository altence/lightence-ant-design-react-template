import styled from 'styled-components';
import { BaseTypography } from '@app/components/common/BaseTypography/BaseTypography';
import { BaseRate } from '@app/components/common/BaseRate/BaseRate';
import { media } from '@app/utils/utils';
import { BaseCard } from '@app/components/common/BaseCard/BaseCard';

export const DoctorCard = styled(BaseCard)`
  margin: 1rem;
`;

export const Title = styled(BaseTypography.Text)`
  font-size: ${({ theme }) => theme.fontSizes.xxs};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: ${({ theme }) => theme.primary};

  @media only screen and (${media('md')}) {
    font-size: ${({ theme }) => theme.fontSizes.xs};
  }

  @media only screen and (${media('xxl')}) {
    font-size: ${({ theme }) => theme.fontSizes.md};
  }
`;

export const Text = styled(BaseTypography.Text)`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};

  @media only screen and (${media('md')}) {
    font-size: ${({ theme }) => theme.fontSizes.md};
  }

  @media only screen and (${media('xxl')}) {
    font-size: ${({ theme }) => theme.fontSizes.lg};
  }
`;

export const ImgWrapper = styled.div`
  overflow: hidden;
  margin: -1rem -1rem 0;

  border-top-left-radius: ${({ theme }) => theme.borderRadius};
  border-top-right-radius: ${({ theme }) => theme.borderRadius};

  & > div {
    display: block;
  }
`;

export const Rating = styled(BaseRate)`
  display: flex;
  font-size: ${({ theme }) => theme.fontSizes.xxs};

  @media only screen and (${media('md')}) {
    font-size: ${({ theme }) => theme.fontSizes.lg};
  }
`;
