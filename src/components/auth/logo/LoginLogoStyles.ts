import styled from 'styled-components';
import theme from '../../../styles/theme';

export const LogoDiv = styled.div`
  padding: 6.5rem 0 7.625rem 0;
  display: flex;
  align-items: center;
  flex-flow: column;

  @media ${theme.media.md} {
    padding: 13rem 0 0 0;
  }
`;

export const CompanyLogo = styled.a`
  font-weight: 700;
  font-size: 4rem;
  color: #ffffff;
`;

export const LogoText = styled.a`
  font-weight: 300;
  font-size: 2.25rem;
  color: #ffffff;
`;
