import styled from 'styled-components';

export interface BtnProps {
  isActive: boolean;
}

export const Line = styled.div<BtnProps>`
  width: 1.5rem;
  height: 0.3rem;
  border-radius: 5px;
  margin-bottom: 0.2rem;

  background-color: ${(props) => props.theme.colors.primary};

  ${(props) => !props.isActive && 'opacity: 0.4'};

  &:nth-last-of-type(1) {
    margin-bottom: 0;
  }
`;
