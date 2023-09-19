import styled from 'styled-components';
import { media } from '@app/utils/utils';
import { BaseTypography } from '../BaseTypography/BaseTypography';

export const Header = styled.div`
  height: 5.5rem;
  margin-left: 1.5625rem;
  display: flex;
  align-items: center;
`;

export const AuthorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 0.625rem;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 21.25rem;
  position: relative;
  max-width: 42.5rem;
  box-shadow: ${({ theme }) => theme.boxShadow};
  border-radius: ${({ theme }) => theme.borderRadius};
  transition: 0.3s;
  background: ${({ theme }) => theme.secondaryBackground};

  &:hover {
    box-shadow: ${({ theme }) => theme.boxShadowHover};
  }
`;

export const Author = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.textMain};
  line-height: 1.5625rem;
`;

export const InfoWrapper = styled.div`
  padding: 1.25rem;

  @media only screen and (${media('xl')}) {
    padding: 1rem;
  }

  @media only screen and (${media('xxl')}) {
    padding: 1.85rem;
  }
`;

export const InfoHeader = styled.div`
  display: flex;
  margin-bottom: 1rem;

  @media only screen and (${media('md')}) {
    margin-bottom: 0.625rem;
  }

  @media only screen and (${media('xxl')}) {
    margin-bottom: 1.25rem;
  }
`;

export const Title = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  width: 80%;
  line-height: 1.375rem;
  color: ${({ theme }) => theme.textMain};

  @media only screen and (${media('md')}) {
    font-size: ${({ theme }) => theme.fontSizes.xxl};
  }
`;

export const DateTime = styled(BaseTypography.Text)`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ theme }) => theme.textMain};
  line-height: 1.25rem;
`;

export const Description = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ theme }) => theme.textMain};

  @media only screen and (${media('xxl')}) {
    font-size: 1rem;
  }
`;

export const TagsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.625rem;
  padding: 0 1.25rem 1.25rem;
`;
