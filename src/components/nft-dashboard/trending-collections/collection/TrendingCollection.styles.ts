import styled from 'styled-components';
import { BaseButton } from '@app/components/common/BaseButton/BaseButton';
import { NFTCard } from '@app/components/nft-dashboard/common/NFTCard/NFTCard';
import { media } from '@app/utils/utils';
import { BaseTypography } from '@app/components/common/BaseTypography/BaseTypography';

interface CardInternalProps {
  $img: string;
}

export const CollectionImage = styled.img`
  animation: imgOut 0.5s;
  width: 100%;
  height: 126px;
  object-fit: cover;
  border-top-left-radius: ${({ theme }) => theme.borderRadius};
  border-top-right-radius: ${({ theme }) => theme.borderRadius};
`;

export const NftCollectionInfo = styled.div`
  position: relative;
  padding: 2rem 1.25rem 1.5rem;
`;

export const InfoRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  &:not(:last-of-type) {
    margin-bottom: 0.1rem;
  }
`;

export const Title = styled(BaseTypography.Title)`
  transition: all 0.5s ease;

  &.ant-typography {
    margin-bottom: 0;
    font-size: ${({ theme }) => theme.fontSizes.md};
  }
`;

export const Text = styled(BaseTypography.Text)`
  transition: all 0.5s ease;
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
`;

export const OwnerText = styled(Text)`
  letter-spacing: 0.02em;
  font-size: ${({ theme }) => theme.fontSizes.xxs};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  font-family: ${({ theme }) => theme.fontFamilies.secondary};
  color: ${({ theme }) => theme.nft.textLight};

  @media only screen and (${media('xl')}) {
    font-size: ${({ theme }) => theme.fontSizes.xs};
  }
`;

export const USDText = styled(BaseTypography.Text)`
  transition: all 0.5s ease;
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  font-size: ${({ theme }) => theme.fontSizes.xs};
`;

export const AuthorAvatarWrapper = styled.div`
  transition: all 0.5s ease;
  position: absolute;
  top: -45px;
  border-radius: 50%;
  border: 2px solid ${({ theme }) => theme.textSecondary};
`;

export const BidButton = styled(BaseButton)`
  transition: all 0.5s ease;
  position: absolute;
  top: 20px;
  right: 20px;
  padding: 10px 14px;
  font-size: ${({ theme }) => theme.fontSizes.md};

  &.ant-btn-background-ghost {
    color: ${({ theme }) => theme.textSecondary};
    border-color: ${({ theme }) => theme.textSecondary};
  }
`;

export const Card = styled(NFTCard)<CardInternalProps>`
  overflow: hidden;

  &:hover {
    & {
      background: ${(props) => `url(${props.$img})`};
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
      position: relative;
    }

    ${CollectionImage} {
      animation: imgIn 0.5s;
      animation-fill-mode: forwards;
    }

    ${Title}, ${Text}, ${USDText} {
      color: ${({ theme }) => theme.textSecondary};
    }

    ${AuthorAvatarWrapper} {
      transform: translateY(-70px) scale(1.1);
    }

    ${BidButton} {
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) scale(1.1);
      position: absolute;
    }
  }

  @keyframes imgIn {
    99% {
      transform: scale(2);
    }

    100% {
      opacity: 0;
    }
  }

  @keyframes imgOut {
    0% {
      transform: scale(2);
    }

    100% {
      transform: scale(1);
    }
  }
`;
