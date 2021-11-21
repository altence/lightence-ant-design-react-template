import styled from 'styled-components';
import { Button } from 'antd';
import theme from 'styles/theme';

export const Description = styled.div`
  margin-bottom: 1.875rem;
  color: ${(props) => props.theme.colors.text.main};
  font-size: ${(props) => props.theme.commonFontSizes.xs};
  font-weight: ${(props) => props.theme.commonFontWeight.regular};

  @media only screen and ${theme.media.xs} {
    font-size: ${(props) => props.theme.commonFontSizes.xxs};
  }

  @media only screen and ${theme.media.md} {
    font-size: ${(props) => props.theme.commonFontSizes.xs};
  }

  @media only screen and ${theme.media.xl} {
    font-size: ${(props) => props.theme.commonFontSizes.xs};
  }
`;

export const SubmitButton = styled(Button)`
  font-size: ${(props) => props.theme.commonFontSizes.md};
  font-weight: ${(props) => props.theme.commonFontWeight.semibold};
  width: 100%;
  margin-top: 1.125rem;
  margin-bottom: 1rem;
`;
