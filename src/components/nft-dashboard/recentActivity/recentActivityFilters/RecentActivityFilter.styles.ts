import { Typography } from 'antd';
import styled from 'styled-components';

export const Title = styled(Typography.Text)`
  padding: 0 4rem 0.75rem 0;

  font-size: ${(props) => props.theme.commonFontSizes.xs};

  font-family: ${(props) => props.theme.fonts.secondary};

  border-bottom: ${(props) => `0.2px solid ${props.theme.colors.border.nft}`};

  @media only screen and ${(props) => props.theme.media.xl} {
    font-size: ${(props) => props.theme.commonFontSizes.md};
  }
`;
