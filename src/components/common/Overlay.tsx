import styled, { css } from 'styled-components';

interface OverlayProps {
  show: boolean;
}

export default styled.div<OverlayProps>`
  position: absolute;
  z-index: 1;
  background-color: rgb(141, 141, 141);
  height: 0;
  opacity: 0;
  transition: opacity 300ms linear;

  ${(props) =>
    props.show &&
    css`
      opacity: 0.5;
      width: 100%;
      height: 100%;
    `}
`;
