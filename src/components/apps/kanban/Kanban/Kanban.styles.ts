import { media } from '@app/styles/themes/light/lightTheme';
import Board from 'react-trello';
import styled from 'styled-components';

export const Kanban = styled(Board)`
  background: transparent;
  height: 100%;
  padding: 0 var(--mobile-padding-horizontal);

  margin: 0 calc(-1 * var(--mobile-padding-horizontal));

  @media only screen and ${media.md} {
    padding: 0 var(--desktop-padding-horizontal);
    margin: 0 calc(-1 * var(--desktop-padding-horizontal));
  }

  div:first-child {
    height: 100%;
  }
`;
