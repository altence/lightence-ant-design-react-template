import styled from 'styled-components';
import { LaneHeader } from 'react-trello/dist/styles/Base';

export const Header = styled(LaneHeader)`
  color: ${(props) => props.theme.colors.text.secondary};
  width: 16rem;
  padding: 0;
`;

export const Title = styled.div`
  font-size: ${(props) => props.theme.commonFontSizes.lg};
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: ${(props) => props.theme.commonFontWeight.bold};
  color: ${(props) => props.theme.colors.main.primary};
`;

export const Dot = styled.span`
  padding-left: 0.625rem;
  padding-right: 0.3125rem;
`;
