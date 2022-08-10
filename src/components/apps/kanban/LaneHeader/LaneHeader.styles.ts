import styled from 'styled-components';
import { LaneHeader } from 'react-trello/dist/styles/Base';

export const Header = styled(LaneHeader)`
  color: var(--text-main-color);
  width: 16rem;
  padding: 0;
`;

export const Title = styled.div`
  font-size: var(--font-size-lg);
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: var(--font-weight-bold);
  color: var(--primary-color);
`;

export const Dot = styled.span`
  padding-left: 0.625rem;
  padding-right: 0.3125rem;
`;
