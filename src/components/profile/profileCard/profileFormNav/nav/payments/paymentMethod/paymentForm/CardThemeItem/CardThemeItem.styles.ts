import { BORDER_RADIUS } from '@app/styles/themes/constants';
import styled from 'styled-components';

interface BackgroundWrapperProps {
  isActive: boolean;
  background: string;
}

export const BackgroundWrapper = styled.div<BackgroundWrapperProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: 3.125rem;
  height: 3.125rem;
  margin: 0 auto;
  transition: all 0.5s ease;

  border-radius: ${BORDER_RADIUS};

  ${(props) => props.isActive && `background: url(${props.background})`};
  background-size: cover;

  & > div {
    background: ${(props) => `url(${props.background})`};
    background-size: cover;
  }

  &:hover {
    opacity: 0.7;

    ${(props) => `background: url(${props.background})`};
    background-size: cover;
  }
`;

export const Theme = styled.div`
  width: calc(100% - 0.4rem);
  height: calc(100% - 0.4rem);
  margin: 0.2rem;

  border: 5px solid var(--background-color);

  border-radius: ${BORDER_RADIUS};
`;
