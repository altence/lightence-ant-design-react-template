import Board from 'react-trello';
import styled from 'styled-components';

export const Kanban = styled(Board)`
  background: transparent;

  margin: ${(props) => `0 -${props.theme.mobileLayout.paddingHorizontal}`};

  & ::-webkit-scrollbar {
    width: 16px;
  }
  & ::-webkit-scrollbar-track {
    background-color: transparent;
  }
  & ::-webkit-scrollbar-thumb {
    background-color: #e0e0e0;
    border-radius: 20px;
    border: 6px solid transparent;
    background-clip: content-box;
  }

  @media only screen and ${(props) => props.theme.media.md} {
    margin: ${(props) => `0 -${props.theme.desktopLayout.paddingHorizontal}`};
  }
`;
