import styled from 'styled-components';
import { Button } from '@app/components/common/buttons/Button/Button';
import { Typography } from 'antd';
import { NFTCard } from '@app/components/nft-dashboard/common/NFTCard/NFTCard';
import { FONT_SIZE, FONT_WEIGHT, FONT_FAMILY, media, BORDER_RADIUS } from '@app/styles/themes/constants';
interface CardInternalProps {
  $img: string;
}

export const CollectionImage = styled.img`
  animation: imgOut 0.5s;
  width: 100%;
  height: 126px;
  object-fit: cover;
  border-top-left-radius: ${BORDER_RADIUS};
  border-top-right-radius: ${BORDER_RADIUS};
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

export const Title = styled(Typography.Title)`
  transition: all 0.5s ease;

  &.ant-typography {
    margin-bottom: 0;

    font-size: ${FONT_SIZE.md};
  }
`;

export const Text = styled(Typography.Text)`
  transition: all 0.5s ease;

  font-size: ${FONT_SIZE.xs};

  font-weight: ${FONT_WEIGHT.semibold};
`;

export const OwnerText = styled(Text)`
  letter-spacing: 0.02em;

  font-size: ${FONT_SIZE.xxs};

  font-weight: ${FONT_WEIGHT.regular};

  font-family: ${FONT_FAMILY.secondary};

  color: var(--text-nft-light-color);

  @media only screen and ${media.xl} {
    font-size: ${FONT_SIZE.xs};
  }
`;

export const USDText = styled(Typography.Text)`
  transition: all 0.5s ease;

  font-weight: ${FONT_WEIGHT.semibold};

  font-size: ${FONT_SIZE.xs};
`;

export const AuthorAvatarWrapper = styled.div`
  transition: all 0.5s ease;
  position: absolute;
  top: -45px;
  border-radius: 50%;

  border: 2px solid var(--text-secondary-color);
`;

export const BidButton = styled(Button)`
  transition: all 0.5s ease;
  position: absolute;
  top: 20px;
  right: 20px;
  padding: 10px 14px;

  color: var(--text-secondary-color);

  border-color: var(--text-secondary-color);

  font-size: ${FONT_SIZE.md};
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
      color: var(--text-secondary-color);
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
