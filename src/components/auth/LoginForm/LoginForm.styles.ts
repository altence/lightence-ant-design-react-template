import { FONT_SIZE, FONT_WEIGHT, media } from '@app/styles/themes/constants';
import styled from 'styled-components';

export const LoginDescription = styled.div`
  margin-bottom: 1.875rem;
  color: var(--text-main-color);
  font-size: ${FONT_SIZE.xs};

  @media only screen and ${media.xs} {
    margin-bottom: 1.5625rem;
    font-weight: ${FONT_WEIGHT.bold};
  }

  @media only screen and ${media.md} {
    margin-bottom: 1.75rem;
    font-weight: ${FONT_WEIGHT.regular};
  }

  @media only screen and ${media.xl} {
    margin-bottom: 1.875rem;
  }
`;

export const RememberMeText = styled.span`
  color: var(--primary-color);
  font-size: ${FONT_SIZE.xs};
`;

export const ForgotPasswordText = styled.span`
  color: var(--text-light-color);
  font-size: ${FONT_SIZE.xs};
  text-decoration: underline;
`;
