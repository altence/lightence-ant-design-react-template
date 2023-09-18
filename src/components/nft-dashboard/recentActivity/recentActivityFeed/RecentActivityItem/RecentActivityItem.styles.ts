import styled from 'styled-components';
import { NFTCard } from '@app/components/nft-dashboard/common/NFTCard/NFTCard';
import { media } from '@app/utils/utils';
import { BaseTypography } from '@app/components/common/BaseTypography/BaseTypography';

export const ActivityCard = styled(NFTCard)`
  box-shadow: ${({ theme }) => theme.nft.boxShadowSecondary};
`;

export const Wrapper = styled.div`
  display: flex;
  gap: 1.625rem;
`;

export const ImgWrapper = styled.div`
  position: relative;
`;

export const IconWrapper = styled.div`
  width: 1.4375rem;
  height: 1.4375rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.textSecondary};
  background-color: ${({ theme }) => theme.primary};
  font-size: ${({ theme }) => theme.fontSizes.xs};
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  flex: 1;
`;

export const InfoHeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.375rem;
`;

export const InfoBottomWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled(BaseTypography.Title)`
  &.ant-typography {
    margin-bottom: 0;
    font-size: ${({ theme }) => theme.fontSizes.xs};

    @media only screen and (${media('xl')}) {
      font-size: ${({ theme }) => theme.fontSizes.md};
    }
  }
`;

export const Text = styled(BaseTypography.Text)`
  display: block;
  font-size: ${({ theme }) => theme.fontSizes.xxs};
  color: ${({ theme }) => theme.nft.textLight};
  font-family: ${({ theme }) => theme.fontFamilies.secondary};

  @media only screen and (${media('xl')}) {
    font-size: ${({ theme }) => theme.fontSizes.xs};
  }
`;

export const DateText = styled(Text)`
  font-style: italic;
  font-family: ${({ theme }) => theme.fontFamilies.main};
`;
