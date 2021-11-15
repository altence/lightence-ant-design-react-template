import Board from 'react-trello';
import styled from 'styled-components';

export const Kanban = styled(Board)`
  background: transparent;
  height: calc(100vh - 7.8rem);
  margin: ${(props) => `0 -${props.theme.mobileLayout.paddingHorizontal} -1rem`};

  & ::-webkit-scrollbar {
    width: 1rem;
  }
  & ::-webkit-scrollbar-track {
    background-color: transparent;
  }
  & ::-webkit-scrollbar-thumb {
    background-color: #e0e0e0;
    border-radius: 1.25rem;
    border: 0.375rem solid transparent;
    background-clip: content-box;
  }

  @media only screen and ${(props) => props.theme.media.md} {
    margin: ${(props) => `0 -${props.theme.desktopLayout.paddingHorizontal} -1rem`};
  }
`;
