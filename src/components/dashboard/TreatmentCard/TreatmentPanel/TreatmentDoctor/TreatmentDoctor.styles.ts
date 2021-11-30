import { Typography } from 'antd';
import styled from 'styled-components';

export const Title = styled(Typography.Text)`
  display: block;
  text-align: center;

  font-size: ${(props) => props.theme.commonFontSizes.lg};

  font-weight: ${(props) => props.theme.commonFontWeight.medium};

  @media only screen and ${(props) => props.theme.media.xl} {
    line-height: 3.4rem;

    font-size: ${(props) => props.theme.commonFontSizes.xl};
  }
`;
