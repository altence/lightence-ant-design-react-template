import { Image, Typography } from 'antd';
import styled from 'styled-components';
import { NFTCard } from '@app/components/nft-dashboard/common/NFTCard/NFTCard';

interface StatusProps {
  $color: string;
}

interface CardInternalProps {
  $coords: number[];
}

export const Img = styled(Image)`
  position: relative;
`;

export const IconWrapper = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  transform: translate(50%, 0);
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  color: ${(props) => props.theme.colors.text.secondary};

  background-color: ${(props) => props.theme.colors.main.primary};

  font-size: ${(props) => props.theme.commonFontSizes.xs};
`;

export const Title = styled(Typography.Title)`
  &.ant-typography {
    margin-bottom: 0;

    font-size: ${(props) => props.theme.commonFontSizes.xs};

    @media only screen and ${(props) => props.theme.media.xl} {
      font-size: ${(props) => props.theme.commonFontSizes.md};
    }
  }
`;

export const StatusText = styled(Typography.Text)<StatusProps>`
  color: ${(props) => props.$color};

  font-size: ${(props) => props.theme.commonFontSizes.xs};
`;

export const Text = styled(Typography.Text)`
  display: block;
  font-size: ${(props) => props.theme.commonFontSizes.xs};

  color: ${(props) => props.theme.colors.text.nftLight};
`;

export const DateText = styled(Text)`
  font-style: italic;
`;

export const Card = styled(NFTCard)<CardInternalProps>`
  ${Img} {
    transform: ${(props) => `translate3d(calc(${props.$coords[1]} * 1px), calc(${props.$coords[0]} * 1px), 0)`};
  }

  ${IconWrapper} {
    transform: ${(props) => `translate3d(calc(${props.$coords[1]} * 1px), calc(${props.$coords[0]} * 1px), 0)`};
  }

  ${Title} {
    transform: ${(props) =>
      `translate3d(calc(${props.$coords[1]} * 1px), calc(${props.$coords[0]} * -1px), calc(${props.$coords[1]} * 1px))`};
  }

  ${Text} {
    transform: ${(props) =>
      `translate3d(calc(${props.$coords[1]} * 1px), calc(${props.$coords[0]} * -1px), calc(${props.$coords[1]} * 1px))`};
  }

  ${DateText} {
    transform: ${(props) => `translate3d(calc(${props.$coords[1]} * 1px), calc(${props.$coords[0]} * 1px), 0)`};
  }
`;
