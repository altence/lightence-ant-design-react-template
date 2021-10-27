import Board from 'react-trello';
import styled from 'styled-components';

export const Kanban = styled(Board)`
  background: transparent;

  margin: ${(props) => `0 -${props.theme.mobileLayout.paddingHorizontal}`};

  @media only screen and ${(props) => props.theme.media.md} {
    margin: ${(props) => `0 -${props.theme.desktopLayout.paddingHorizontal}`};
  }
`;
