import styled from 'styled-components';

interface SuffixProps {
  isOpen: boolean;
}

export const Suffix = styled.div<SuffixProps>`
  transition: all 0.5s ease;
  visibility: visible;
  opacity: 1;

  ${(props) => !props.isOpen && 'opacity: 0; visibility: hidden'};
`;
