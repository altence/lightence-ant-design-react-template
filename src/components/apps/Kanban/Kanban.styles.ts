import Board from 'react-trello';
import styled from 'styled-components';

export const Kanban = styled(Board)`
  background: transparent;

  margin: 0 -1rem;

  @media only screen and ${(props) => props.theme.media.md} {
    margin: 0 -1.5rem;
  }
`;
