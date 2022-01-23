import styled from 'styled-components';
import React from 'react';

export const ReferencesWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: ${(props) => `${props.theme.mobileLayout.paddingVertical}`};

  @media only screen and ${(props) => props.theme.media.md} {
    margin-top: ${(props) => `${props.theme.desktopLayout.paddingVertical}`};
  }
`;

export const Text = styled.span`
  display: flex;
  align-items: center;
  white-space: pre-wrap;
`;

export const Icons = styled.div`
  margin-left: -0.5rem;
  margin-right: -0.5rem;
`;

type ReturnType<T> = (props: T) => JSX.Element;

export function withStyles<T>(Component: React.ComponentType<T>): ReturnType<T> {
  return styled(Component)`
    font-size: 2rem;
    margin-left: 0.5rem;
    margin-right: 0.5rem;
  `;
}
