import { Typography } from 'antd';
import styled from 'styled-components';
import { NFTCard } from '@app/components/nft-dashboard/common/NFTCard/NFTCard';

export const ActivityCard = styled(NFTCard)`
  box-shadow: ${(props) => props.theme.boxShadow.nftSecondary};
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

  color: ${(props) => props.theme.colors.text.secondary};

  background-color: ${(props) => props.theme.colors.main.primary};

  font-size: ${(props) => props.theme.commonFontSizes.xs};
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

export const Title = styled(Typography.Title)`
  &.ant-typography {
    margin-bottom: 0;

    font-size: ${(props) => props.theme.commonFontSizes.xs};

    @media only screen and ${(props) => props.theme.media.xl} {
      font-size: ${(props) => props.theme.commonFontSizes.md};
    }
  }
`;

export const Text = styled(Typography.Text)`
  display: block;

  font-size: ${(props) => props.theme.commonFontSizes.xxs};

  color: ${(props) => props.theme.colors.text.nftLight};

  font-family: ${(props) => props.theme.fonts.secondary};

  @media only screen and ${(props) => props.theme.media.xl} {
    font-size: ${(props) => props.theme.commonFontSizes.xs};
  }
`;

export const DateText = styled(Text)`
  font-style: italic;

  font-family: ${(props) => props.theme.fonts.main};
`;
