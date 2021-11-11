import styled from 'styled-components';
import { ReactComponent as RemoveTag } from '../../../../assets/icons/close.svg';

export const RemoveTagWrapper = styled.span`
  padding-left: 0.3125rem;
`;

export const RemoveTagIcon = styled(RemoveTag)`
  stroke: ${(props) => props.theme.commonColors.white};
`;
