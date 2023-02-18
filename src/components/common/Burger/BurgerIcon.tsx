import React from 'react';
import styled, { css } from 'styled-components';

interface BurgerProps {
  className?: string;
  onClick: () => void;
}

export const Burger: React.FC<BurgerProps> = ({ className, onClick }) => (
  <svg width="1em" height="1em" viewBox="280 215 400 220" fill="currentColor" className={className} onClick={onClick}>
    <path d="M300,220 C300,220 520,220 540,220 C740,220 640,540 520,420 C440,340 300,200 300,200" id="top" />
    <path d="M300,320 L540,320" id="middle" />
    <path
      d="M300,210 C300,210 520,210 540,210 C740,210 640,530 520,410 C440,330 300,190 300,190"
      id="bottom"
      transform="translate(480, 320) scale(1, -1) translate(-480, -318) "
    />
  </svg>
);

export const BurgerIcon = styled(Burger)<{ isCross: boolean }>`
  cursor: pointer;
  transform: translate3d(0, 0, 0);

  path {
    fill: none;
    transition: stroke-dashoffset 0.5s cubic-bezier(0.25, -0.25, 0.75, 1.25),
      stroke-dasharray 0.5s cubic-bezier(0.25, -0.25, 0.75, 1.25);
    stroke-width: 30px;
    stroke-linecap: round;
    stroke: currentColor;
    stroke-dashoffset: 0;

    &#top,
    &#bottom {
      stroke-dasharray: 240px 950px;
    }
    &#middle {
      stroke-dasharray: 240px 240px;
    }

    ${(props) =>
      props.isCross &&
      css`
        &#top,
        &#bottom {
          stroke-dashoffset: -650px;
        }
        &#middle {
          stroke-dashoffset: -115px;
          stroke-dasharray: 1px 220px;
        }
      `}
  }
`;
