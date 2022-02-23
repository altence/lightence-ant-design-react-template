import styled from 'styled-components';
import { Card } from '@app/components/common/Card/Card';

export const CardStyled = styled(Card)`
  width: 100%;

  .ant-card-body {
    padding: 0;
  }
`;

export const NftImage = styled.img`
  width: 100%;
  height: 195px;
  object-fit: cover;
  border-top-left-radius: ${(props) => props.theme.border.radius};
  border-top-right-radius: ${(props) => props.theme.border.radius};
`;

export const Title = styled.span`
  font-weight: ${(props) => props.theme.commonFontWeight.semibold};
  font-weight: ${(props) => props.theme.commonFontSizes.md};
  margin-bottom: 0;
  color: ${(props) => props.theme.colors.text.nftMain};
`;

export const NftInfo = styled.div`
  padding: 1rem 1.25rem 1.5rem;
`;

export const InfoRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.375rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const InfoText = styled.span`
  font-family: ${(props) => props.theme.fonts.secondaryFont};
  font-weight: ${(props) => props.theme.commonFontWeight.regular};
  font-size: ${(props) => props.theme.commonFontSizes.xs};
  color: ${(props) => props.theme.colors.text.nftMain};
`;

export const CurrentBid = styled(InfoText)`
  color: ${(props) => props.theme.colors.text.nftInfo};
`;

export const BidCrypto = styled.span`
  font-size: 0.875rem;
  color: ${(props) => props.theme.colors.text.nftMain};
`;

export const Bid = styled(CurrentBid)`
  color: ${(props) => props.theme.colors.main.primaryNft};
  font-weight: ${(props) => props.theme.commonFontWeight.semibold};
`;
