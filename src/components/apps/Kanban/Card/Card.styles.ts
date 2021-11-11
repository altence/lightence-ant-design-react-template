import styled from 'styled-components';
import {
  CardRightContent as RightContent,
  CardTitle as Title,
  CardHeader as Header,
  Detail,
  MovableCardWrapper,
  Footer,
} from 'react-trello/dist/styles/Base';
import InlineInput from 'react-trello/dist/widgets/InlineInput';
import { ReactComponent as ArrowDownIcon } from '../../../../assets/icons/arrow-down.svg';
import { ReactComponent as RemoveTagIcon } from '../../../../assets/icons/close.svg';
import { Checkbox } from 'antd';

interface ArrowDownProps {
  isExpanded: boolean;
}

interface TagProps {
  backgroundColor: string;
}

export const ParticipantsWrapper = styled.div`
  margin-top: 1.5625rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const ParticipantRow = styled.div`
  display: flex;
  align-items: center;
`;

export const ParticipantAvatar = styled.img`
  height: 1.5625rem;
  width: 1.5625rem;
  border-radius: 50%;
`;

export const ParticipantName = styled.div`
  font-size: ${(props) => props.theme.commonFontSizes.xs};
  color: ${(props) => props.theme.colors.text.main};
  margin-left: 0.625rem;
  margin-right: 0.625rem;
`;

export const PopoverCheckbox = styled(Checkbox)`
  & .ant-checkbox .ant-checkbox-inner {
    border-radius: 3px;
    height: 1.375rem;
    width: 1.375rem;
    border-color: ${(props) => props.theme.colors.main.primary};
  }
  & .ant-checkbox-checked .ant-checkbox-inner::after {
    left: 0.375rem;
  }
`;

export const TagWrapper = styled.span<TagProps>`
  height: 1.875rem;
  background-color: ${(props) => `${props.backgroundColor}`};
  padding: 0.3125rem 0.625rem;
  color: ${(props) => props.theme.commonColors.white};
  border-radius: 0.5rem;
  font-size: ${(props) => props.theme.commonFontSizes.xs};
  margin-left: 1rem;
`;

export const ArrowDownWrapper = styled.span`
  padding-right: 1.25rem;
  width: 1.5rem;
`;

export const ThreeDotsWrapper = styled.span`
  width: 1.5rem;
`;

export const RemoveTagWrapper = styled.div`
  position: absolute;
  right: 1rem;
  top: 1rem;
  cursor: pointer;
`;

export const RemoveTag = styled(RemoveTagIcon)`
  stroke: ${(props) => props.theme.colors.main.primary};
  width: 0.875rem;
  height: 0.875rem;
`;

export const RemoveParticipant = styled(RemoveTagIcon)`
  stroke: ${(props) => props.theme.colors.text.light};
  width: 0.5rem;
  height: 0.5rem;
`;

export const ArrowDown = styled(ArrowDownIcon)<ArrowDownProps>`
  transform: ${(props) => `rotate(${props.isExpanded ? 0 : 180}deg)`};
`;

export const Card = styled.div`
  position: relative;
`;

export const CardWrapper = styled(MovableCardWrapper)`
  filter: drop-shadow(0 4px 40px rgba(0, 0, 0, 0.07));
`;

export const CardRightContent = styled(RightContent)`
  display: flex;
  justify-content: flex-end;
  padding-right: 0;
  align-items: center;
`;

export const CardTitle = styled(Title)`
  font-size: ${(props) => props.theme.commonFontSizes.md};
  line-height: 1.375rem;
  font-weight: ${(props) => props.theme.commonFontWeight.semibold};
  color: ${(props) => props.theme.colors.text.main};
  margin-left: -0.5rem;
  display: flex;
`;

export const CardHeader = styled(Header)`
  border-bottom: none;
  margin-bottom: 0;
  padding-bottom: 0;
`;

export const CardDetails = styled(Detail)`
  font-size: ${(props) => props.theme.commonFontSizes.xs};
  font-weight: ${(props) => props.theme.commonFontWeight.medium};
  color: ${(props) => props.theme.colors.text.main};
  margin-left: -0.5rem;
  margin-top: 1rem;
  display: flex;
`;

export const CardFooter = styled(Footer)`
  display: flex;
  border: none;
  padding-top: 1rem;
  gap: 10px;
  justify-content: flex-start;
`;

export const Input = styled(InlineInput)`
  padding: 0;
`;

export const EditPopover = styled.div`
  display: flex;
  position: absolute;
  right: 2px;
  background: ${(props) => props.theme.commonColors.white};
  top: 2.7rem;
  flex-direction: column;
  border-radius: 0.625rem;
  padding: 1rem;
  z-index: 1;
  filter: drop-shadow(0 0 3px rgba(0, 0, 0, 0.2));
`;

export const EditTagPopover = styled(EditPopover)`
  top: 6rem;
  padding: 1.25rem 1.5625rem;
  max-width: 14.375rem;
  left: 0;
  gap: 0.625rem;
`;

export const EditTagPopoverLine = styled.span`
  line-height: 1.25rem;
  display: flex;
  &:last-child {
    padding-bottom: 0px;
  }
  align-items: center;
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

export const TagPlusWrapper = styled.span`
  display: flex;
  height: 1.875rem;
  align-items: center;
`;
