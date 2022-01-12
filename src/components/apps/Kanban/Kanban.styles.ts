import Board from 'react-trello';
import styled from 'styled-components';

export const Kanban = styled(Board)`
  background: transparent;
  height: unset;
  padding: unset;
  margin: ${(props) => `-${props.theme.mobileLayout.paddingVertical} -${props.theme.mobileLayout.paddingHorizontal}`};

  @media only screen and ${(props) => props.theme.media.md} {
    margin: ${(props) =>
      `-${props.theme.desktopLayout.paddingVertical} -${props.theme.desktopLayout.paddingHorizontal}`};
  }
`;
