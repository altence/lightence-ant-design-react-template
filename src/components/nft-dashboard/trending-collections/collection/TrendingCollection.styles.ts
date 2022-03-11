import styled from 'styled-components';
import { Button } from '@app/components/common/buttons/Button/Button';
import { Typography } from 'antd';
import { NFTCard } from '@app/components/nft-dashboard/common/NFTCard/NFTCard';

interface CardInternalProps {
  $img: string;
}

export const CollectionImage = styled.img`
  width: 100%;
  height: 126px;
  object-fit: cover;
  border-top-left-radius: ${(props) => props.theme.border.radius};
  border-top-right-radius: ${(props) => props.theme.border.radius};

  @media only screen and ${(props) => props.theme.media.sm} {
    height: 186px;
  }
`;

export const NftCollectionInfo = styled.div`
  position: relative;
  padding: 2rem 1.25rem 1.5rem;
`;

export const InfoRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled(Typography.Title)`
  &.ant-typography {
    margin-bottom: 0;

    font-size: ${(props) => props.theme.commonFontSizes.md};
  }
`;

export const Text = styled(Typography.Text)`
  color: ${(props) => props.theme.colors.text.nftLight};
`;

export const OwnerText = styled(Text)`
  font-size: ${(props) => props.theme.commonFontSizes.xxs};

  font-weight: ${(props) => props.theme.commonFontWeight.regular};
`;

export const USDText = styled(Typography.Text)`
  color: ${(props) => props.theme.colors.main.primary};
`;

export const AuthorAvatarWrapper = styled.div`
  position: absolute;
  bottom: 80px;
  height: 70px;
  width: 70px;
  border: 3px solid ${(props) => props.theme.colors.text.secondary};
  border-radius: 50%;

  box-shadow: ${(props) => props.theme.boxShadow.hover};
`;

export const BidButton = styled(Button)`
  position: absolute;
  top: 20px;
  right: 20px;
  padding: 12px 33px;
  color: ${(props) => props.theme.colors.text.secondary};
  border-color: ${(props) => props.theme.colors.text.secondary};
  border-radius: 14px;
`;

export const Card = styled(NFTCard)<CardInternalProps>`
  ${CollectionImage} {
    transition: all 0.5s ease;
  }

  ${Title}, ${Text}, ${USDText} {
    transition: all 0.5s ease;
  }

  ${AuthorAvatarWrapper} {
    transition: all 0.5s ease;
  }

  ${BidButton} {
    transition: all 0.5s ease;
  }

  &:hover {
    & {
      background: ${(props) => `url(${props.$img})`};
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
      position: relative;
    }

    ${CollectionImage} {
      opacity: 0;
      transform: scale(0);
    }

    ${Title}, ${Text}, ${USDText} {
      color: ${(props) => props.theme.colors.text.secondary};
    }

    ${NftCollectionInfo} {
      position: unset;
    }

    ${AuthorAvatarWrapper} {
      bottom: 90%;
      transform: translateY(100%);
    }

    ${BidButton} {
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) scale(1.2);
      position: absolute;
    }
  }
`;
