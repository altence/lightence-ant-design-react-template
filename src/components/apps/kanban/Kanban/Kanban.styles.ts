import { LAYOUT } from '@app/styles/themes/constants';
import { media } from '@app/styles/themes/constants';
import Board from 'react-trello';
import styled from 'styled-components';

export const Kanban = styled(Board)`
  background: transparent;
  height: 100%;
  padding: 0 ${LAYOUT.mobile.paddingHorizontal};

  margin: 0 -${LAYOUT.mobile.paddingHorizontal};

  @media only screen and ${media.md} {
    padding: 0 ${LAYOUT.desktop.paddingHorizontal};
    margin: 0 -${LAYOUT.desktop.paddingHorizontal};
  }
`;
