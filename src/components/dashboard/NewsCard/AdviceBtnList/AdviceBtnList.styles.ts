import styled from 'styled-components';
import theme from '../../../../styles/theme';

export interface BtnProps {
  isActive: boolean;
}

export const Line = styled.div<BtnProps>`
  width: 1rem;
  height: 0.18rem;
  border-radius: 5px;
  margin-bottom: 0.125rem;
  flex-shrink: 0;

  background-color: ${(props) => props.theme.colors.main.primary};

  ${(props) => !props.isActive && 'opacity: 0.4'};

  @media only screen and ${theme.media.xxl} {
    width: 1.5rem;
    height: 0.3rem;
  }

  &:nth-last-of-type(1) {
    margin-bottom: 0;
  }
`;
