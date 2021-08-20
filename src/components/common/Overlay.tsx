import styled, { css } from 'styled-components';

interface OverlayProps {
  show: boolean;
}

export default styled.div<OverlayProps>`
  position: absolute;
  z-index: 1;
  height: 0;
  opacity: 0;
  transition: opacity 300ms linear;

  background-color: ${(props) => props.theme.colors.primary};

  ${(props) =>
    props.show &&
    css`
      opacity: 0.6;
      width: 100%;
      height: 100%;
    `}
`;
