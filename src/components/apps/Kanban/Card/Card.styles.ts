import styled from 'styled-components';
import {
  CardRightContent as RightContent,
  CardTitle as Title,
  CardHeader as Header,
} from 'react-trello/dist/styles/Base';
import InlineInput from 'react-trello/dist/widgets/InlineInput';
import { ReactComponent as ArrowDownIcon } from '../../../../assets/icons/arrow-down.svg';

interface ArrowDownProps {
  isExpanded: boolean;
}

export const ArrowDownWrapper = styled.span`
  padding-right: 1.25rem;
  width: 1.5rem;
`;

export const ThreeDotsWrapper = styled.span`
  width: 1.5rem;
`;

export const ArrowDown = styled(ArrowDownIcon)<ArrowDownProps>`
  transform: ${(props) => `rotate(${props.isExpanded ? 0 : 180}deg)`};
`;

export const CardRightContent = styled(RightContent)`
  display: flex;
  justify-content: flex-end;
  padding-right: 0;
`;

export const CardTitle = styled(Title)`
  font-size: ${(props) => props.theme.commonFontSizes.md};
  line-height: 1.375rem;
  font-weight: ${(props) => props.theme.commonFontWeight.semibold};
  color: ${(props) => props.theme.colors.text.main};
  margin-left: -0.5rem;
`;

export const CardHeader = styled(Header)`
  border-bottom: none;
  margin-bottom: 1rem;
  padding-bottom: 0;
`;

export const Input = styled(InlineInput)`
  padding: 0;
`;

export const EditPopover = styled.div`
  display: flex;
  position: absolute;
  right: 2px;
  background: ${(props) => props.theme.commonColors.white};
  top: 1.875rem;
  flex-direction: column;
  border-radius: 0.625rem;
  padding: 1rem;
  z-index: 1;
  filter: drop-shadow(0 0 3px rgba(0, 0, 0, 0.2));
`;

export const EditPopoverLine = styled.span`
  font-size: ${(props) => props.theme.commonFontSizes.xs};
  line-height: 1.25rem;
  padding-bottom: 0.625rem;
  display: flex;
  &:last-child {
    padding-bottom: 0px;
  }
  color: ${(props) => props.theme.colors.text.main};
`;
