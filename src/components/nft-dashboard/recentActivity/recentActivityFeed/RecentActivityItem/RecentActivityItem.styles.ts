import { Typography } from 'antd';
import styled from 'styled-components';
import { NFTCard } from '@app/components/nft-dashboard/common/NFTCard/NFTCard';

interface StatusProps {
  $color: string;
}

export const ActivityCard = styled(NFTCard)`
  box-shadow: ${(props) => props.theme.boxShadow.nftSecondary};
`;

export const Img = styled.img`
  position: relative;
`;

export const IconWrapper = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  transform: translate(50%, 25%);
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
