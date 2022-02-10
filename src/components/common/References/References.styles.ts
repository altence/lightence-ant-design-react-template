import styled from 'styled-components';
import React from 'react';

export const ReferencesWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  flex-wrap: nowrap;
  margin-top: ${(props) => `${props.theme.mobileLayout.paddingVertical}`};

  @media only screen and ${(props) => props.theme.media.sm} {
    align-items: center;
  }

  @media only screen and ${(props) => props.theme.media.xl} {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const Text = styled.span`
  display: flex;
  align-items: center;
  white-space: pre-wrap;
  flex-wrap: wrap;
  margin-bottom: 1rem;

  @media only screen and ${(props) => props.theme.media.xl} {
    margin-bottom: 0;
  }
`;

export const Icons = styled.div`
  margin-left: -0.5rem;
  margin-right: -0.5rem;
  display: flex;
  flex-wrap: nowrap;
`;

type ReturnType<T> = (props: T) => JSX.Element;

export function withStyles<T>(Component: React.ComponentType<T>): ReturnType<T> {
  return styled(Component)`
    font-size: 2rem;
    margin-left: 0.5rem;
    margin-right: 0.5rem;
  `;
}
