import { Typography } from 'antd';
import styled from 'styled-components';
import { NFTCard } from '@app/components/nft-dashboard/common/NFTCard/NFTCard';

interface CardInternalProps {
  $img: string;
}

export const NftImage = styled.img`
  animation: imgOut 0.5s;
  width: 100%;
  height: 195px;
  object-fit: cover;
  border-top-left-radius: ${(props) => props.theme.border.radius};
  border-top-right-radius: ${(props) => props.theme.border.radius};
`;

export const Title = styled(Typography.Title)`
  position: relative;
  animation: titleOut 0.5s;

  &.ant-typography {
    margin-bottom: 0;

    font-size: ${(props) => props.theme.commonFontSizes.md};
  }
`;

export const NftInfo = styled.div`
  padding: 1rem 1.25rem 1.5rem;
`;

export const InfoRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.625rem;

  @media only screen and (max-width: ${(props) => props.theme.breakpoints.md - 0.02}px) {
    &:first-of-type {
      margin-bottom: 0;
    }
  }

  @media only screen and ${(props) => props.theme.media.md} {
    margin-bottom: 0.25rem;
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

export const InfoHeader = styled.div`
  margin-bottom: 1rem;
`;

export const InfoFooter = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CurrentBidWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

export const InfoText = styled.span`
  display: block;
  transition: all 0.5s ease;
  letter-spacing: 0.02em;

  font-weight: ${(props) => props.theme.commonFontWeight.regular};

  font-size: ${(props) => props.theme.commonFontSizes.xxs};

  font-family: ${(props) => props.theme.fonts.secondary};

  color: ${(props) => props.theme.colors.text.nftLight};

  @media only screen and ${(props) => props.theme.media.xl} {
    font-size: ${(props) => props.theme.commonFontSizes.xs};
  }
`;

export const CurrentBid = styled(InfoText)`
  font-family: ${(props) => props.theme.fonts.secondary};

  color: ${(props) => props.theme.colors.text.main};
`;

export const BidCrypto = styled.span`
  transition: all 0.5s ease;

  font-size: ${(props) => props.theme.commonFontSizes.xs};

  @media only screen and ${(props) => props.theme.media.xl} {
    font-size: ${(props) => props.theme.commonFontSizes.md};
  }
`;

export const Bid = styled(CurrentBid)`
  font-size: ${(props) => props.theme.commonFontSizes.xs};

  color: ${(props) => props.theme.colors.text.main};

  font-weight: ${(props) => props.theme.commonFontWeight.semibold};

  font-family: ${(props) => props.theme.fonts.main};

  @media only screen and ${(props) => props.theme.media.xl} {
    font-size: ${(props) => props.theme.commonFontSizes.md};
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

    ${NftImage} {
      animation: imgIn 0.5s;
      animation-fill-mode: forwards;
    }

    ${Title} {
      animation: titleIn 0.5s ease;
      animation-fill-mode: forwards;

      color: ${(props) => props.theme.colors.text.secondary};
    }

    ${InfoText} {
      color: ${(props) => props.theme.colors.text.secondary};
    }

    ${BidCrypto} {
      color: ${(props) => props.theme.colors.text.secondary};
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

  @keyframes titleIn {
    0% {
      left: 0;
    }

    100% {
      left: 50%;
      transform: translate(-50%, -50%) scale(1.5);
    }
  }

  @keyframes titleOut {
    0% {
      left: 50%;
      transform: translate(-50%, -50%) scale(1.5);
    }

    100% {
      left: 0;
    }
  }
`;
