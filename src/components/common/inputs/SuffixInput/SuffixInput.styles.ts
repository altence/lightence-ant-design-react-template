import styled, { css } from 'styled-components';

interface SuffixProps {
  isopen: boolean;
}

export const Suffix = styled.div<SuffixProps>`
  transition: all 0.5s ease;
  visibility: visible;
  opacity: 1;

  ${(props) =>
    !props.isopen &&
    css`
      opacity: 0;
      visibility: hidden;
    `}
`;
