import Board from 'react-trello';
import styled from 'styled-components';

export const Kanban = styled(Board)`
  background: transparent;
  height: 100%;
  padding: ${(props) => `0 ${props.theme.mobileLayout.paddingHorizontal}`};

  margin: ${(props) => `0 -${props.theme.mobileLayout.paddingHorizontal}`};

  @media only screen and ${(props) => props.theme.media.md} {
    padding: ${(props) => `0 ${props.theme.desktopLayout.paddingHorizontal}`};
    margin: ${(props) => `0 -${props.theme.desktopLayout.paddingHorizontal}`};
  }

  div:first-child {
    height: 100%;
  }
`;
