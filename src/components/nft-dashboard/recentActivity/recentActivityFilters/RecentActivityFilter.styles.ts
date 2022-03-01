import { Typography } from 'antd';
import styled from 'styled-components';

export const Title = styled(Typography.Text)`
  padding-bottom: 0.75rem;
  display: block;

  font-size: ${(props) => props.theme.commonFontSizes.xs};

  border-bottom: ${(props) => `0.2px solid ${props.theme.colors.border.nft}`};

  @media only screen and ${(props) => props.theme.media.xl} {
    font-size: ${(props) => props.theme.commonFontSizes.md};
  }
`;
