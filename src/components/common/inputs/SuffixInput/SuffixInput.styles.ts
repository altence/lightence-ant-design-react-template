import styled from 'styled-components';

interface SuffixProps {
  isVisible: boolean;
}

export const Suffix = styled.div<SuffixProps>`
  transition: all 0.5s ease;
  visibility: visible;
  opacity: 1;

  ${(props) => !props.isVisible && 'opacity: 0; visibility: hidden'};
`;
