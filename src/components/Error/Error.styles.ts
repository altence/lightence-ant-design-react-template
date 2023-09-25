import styled from 'styled-components';
import { media } from '@app/utils/utils';
import { BaseImage } from '../common/BaseImage/BaseImage';
import { BaseTypography } from '../common/BaseTypography/BaseTypography';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3.75rem 1.25rem;
  border-radius: ${({ theme }) => theme.borderRadius};
  background-color: ${({ theme }) => theme.background};

  @media only screen and (${media('md')}) {
    padding: 2.5rem 6.25rem 6.25rem;
  }

  @media only screen and (${media('xl')}) {
    flex-direction: row-reverse;
    justify-content: center;
    padding: 12.5rem 3.5rem;
  }
`;

export const Image = styled(BaseImage)`
  margin-bottom: 4rem;

  @media only screen and (${media('xxl')}) {
    margin-bottom: 0;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media only screen and (${media('xl')}) {
    margin-right: 7.5rem;
  }
`;

export const Title = styled(BaseTypography.Text)`
  font-size: 2.25rem;
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.textMain};

  @media only screen and (${media('md')}) {
    font-size: 3rem;
    margin-bottom: 1.75rem;
  }

  @media only screen and (${media('xl')}) {
    font-size: 4rem;
    margin-bottom: 2.25rem;
  }
`;

export const Text = styled(Title)`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  margin-bottom: 1.25rem;

  @media only screen and (${media('md')}) {
    font-size: 1.12rem;
    margin-bottom: 1.45rem;
  }

  @media only screen and (${media('xl')}) {
    font-size: ${({ theme }) => theme.fontSizes.xxl};
    margin-bottom: 1.8rem;
  }
`;

export const Link = styled(BaseTypography.Link)`
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  line-height: ${({ theme }) => theme.heights.md};
  padding-inline: 15px;
`;
