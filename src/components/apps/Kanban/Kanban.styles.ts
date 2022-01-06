import Board from 'react-trello';
import styled from 'styled-components';

export const Kanban = styled(Board)`
  background: transparent;
  min-height: 90vh;
  max-height: calc(100vh - 7.8rem);
  margin: ${(props) => `0 -${props.theme.mobileLayout.paddingHorizontal} -1rem`};

  @media only screen and ${(props) => props.theme.media.md} {
    margin: ${(props) => `0 -${props.theme.desktopLayout.paddingHorizontal} -1rem`};
  }
`;
