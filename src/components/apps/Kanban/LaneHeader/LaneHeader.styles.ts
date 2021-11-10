import styled from 'styled-components';
import { LaneHeader, Title as BaseTitle } from 'react-trello/dist/styles/Base';

export const Header = styled(LaneHeader)`
  color: ${(props) => props.theme.commonColors.white};
`;

export const Title = styled(BaseTitle)`
  font-size: ${(props) => props.theme.commonFontSizes.lg};
`;

export const Dot = styled.span`
  padding-left: 0.625rem;
  padding-right: 0.3125rem;
`;
