import { media } from '@app/styles/themes/light/lightTheme';
import styled from 'styled-components';

export const ImageWrapper = styled.div`
  margin-bottom: 1.875rem;
`;

export const VerifyEmailDescription = styled.div`
  margin-bottom: 1.875rem;
  color: var(--text-main-color);
  font-size: var(--font-size-xs);
  font-weight: var(--font-weight-regular);

  @media only screen and ${media.xs} {
    font-size: var(--font-size-xxs);
  }

  @media only screen and ${media.md} {
    font-size: var(--font-size-xs);
  }
`;

export const NoCodeText = styled.div`
  margin-top: 1rem;
  color: var(--primary-color);
  font-size: var(--font-size-xs);
  font-weight: var(--font-weight-regular);
  text-decoration: underline;
  cursor: pointer;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
