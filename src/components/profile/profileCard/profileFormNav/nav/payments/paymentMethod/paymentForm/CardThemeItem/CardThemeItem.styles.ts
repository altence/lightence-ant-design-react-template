import styled, { css } from 'styled-components';

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
  border-radius: ${({ theme }) => theme.borderRadius};
  background-size: cover;

  ${(props) =>
    props.isActive &&
    css`
      background: url(${props.background});
    `}

  &:hover, & > div {
    background: ${(props) => `url(${props.background})`};
    background-size: cover;
  }

  &:hover {
    opacity: 0.7;
  }
`;

export const Theme = styled.div`
  width: calc(100% - 0.4rem);
  height: calc(100% - 0.4rem);
  margin: 0.2rem;
  border: 5px solid ${({ theme }) => theme.background};
  border-radius: ${({ theme }) => theme.borderRadius};
`;
