import styled, { css } from 'styled-components';

interface OverlayProps {
  show: boolean;
}

export default styled.div<OverlayProps>`
  position: absolute;
  z-index: 2;
  height: 0;

  ${(props) =>
    props.show &&
    css`
      backdrop-filter: blur(6px);
      width: 100%;
      height: 100%;
    `}
`;
