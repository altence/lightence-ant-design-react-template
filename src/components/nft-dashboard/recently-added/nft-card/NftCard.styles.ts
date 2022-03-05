import { Typography } from 'antd';
import styled from 'styled-components';

export const NftImage = styled.img`
  width: 100%;
  height: 195px;
  object-fit: cover;
  border-top-left-radius: ${(props) => props.theme.border.radius};
  border-top-right-radius: ${(props) => props.theme.border.radius};
`;

export const Title = styled(Typography.Title)`
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
  margin-bottom: 0.375rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const InfoHeader = styled.div`
  margin-bottom: 1.25rem;
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
  font-weight: ${(props) => props.theme.commonFontWeight.regular};

  font-size: ${(props) => props.theme.commonFontSizes.xs};
`;

export const CurrentBid = styled(InfoText)`
  color: ${(props) => props.theme.colors.text.nftLight};

  font-size: ${(props) => props.theme.commonFontSizes.xxs};
`;

export const BidCrypto = styled.span`
  font-size: ${(props) => props.theme.commonFontSizes.xs};

  @media only screen and ${(props) => props.theme.media.xl} {
    font-size: ${(props) => props.theme.commonFontSizes.md};
  }
`;

export const Bid = styled(CurrentBid)`
  font-size: ${(props) => props.theme.commonFontSizes.xs};

  color: ${(props) => props.theme.colors.main.primary};

  font-weight: ${(props) => props.theme.commonFontWeight.semibold};

  @media only screen and ${(props) => props.theme.media.xl} {
    font-size: ${(props) => props.theme.commonFontSizes.md};
  }
`;
