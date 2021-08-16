import styled from 'styled-components';

export interface BtnProps {
  isActive: boolean;
}

export const Line = styled.div<BtnProps>`
  width: 1rem;
  height: 0.18rem;
  border-radius: 5px;
  margin-bottom: 0.125rem;
  flex-shrink: 0;

  background-color: ${(props) => props.theme.colors.primary};

  ${(props) => !props.isActive && 'opacity: 0.4'};

  &:nth-last-of-type(1) {
    margin-bottom: 0;
  }
`;
