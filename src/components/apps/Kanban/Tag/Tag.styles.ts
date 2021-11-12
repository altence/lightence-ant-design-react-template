import styled from 'styled-components';
import { ReactComponent as RemoveTag } from '../../../../assets/icons/close.svg';
import { TagSpan } from 'react-trello/dist/styles/Base';

export const RemoveTagWrapper = styled.span`
  padding-left: 0.3125rem;
  display: flex;
  align-items: center;
`;

export const RemoveTagIcon = styled(RemoveTag)`
  stroke: ${(props) => props.theme.commonColors.white};
`;

export const TagWrapper = styled(TagSpan)`
  height: 1.875rem;
  border-radius: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.3125rem 0.625rem;
  margin: 0px;
  font-size: theme.commonFontSizes.xs;
`;
