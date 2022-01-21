import styled from 'styled-components';

export const LoginDescription = styled.div`
  margin-bottom: 1.875rem;
  color: ${(props) => props.theme.colors.text.main};
  font-size: ${(props) => props.theme.commonFontSizes.xs};

  @media only screen and ${(props) => props.theme.media.xs} {
    margin-bottom: 1.5625rem;
    font-weight: ${(props) => props.theme.commonFontWeight.bold};
  }

  @media only screen and ${(props) => props.theme.media.md} {
    margin-bottom: 1.75rem;
    font-weight: ${(props) => props.theme.commonFontWeight.regular};
  }

  @media only screen and ${(props) => props.theme.media.xl} {
    margin-bottom: 1.875rem;
  }
`;

export const RememberMeText = styled.span`
  color: ${(props) => props.theme.colors.main.primary};
  font-size: ${(props) => props.theme.commonFontSizes.xs};
`;

export const ForgotPasswordText = styled.span`
  color: ${(props) => props.theme.colors.text.light};
  font-size: ${(props) => props.theme.commonFontSizes.xs};
  text-decoration: underline;
`;
