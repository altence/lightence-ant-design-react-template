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

export const ParticipantsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const ArrowDownWrapper = styled.span`
  padding-right: 1.25rem;
  width: 1.5rem;
  font-size: ${(props) => props.theme.commonFontSizes.md};
`;

export const ThreeDotsWrapper = styled.span`
  width: 1.5rem;
  font-size: ${(props) => props.theme.commonFontSizes.xl};
`;

export const Card = styled.div`
  position: relative;
`;

export const CardWrapper = styled(MovableCardWrapper)`
  filter: drop-shadow(0 4px 5px rgba(0, 0, 0, 0.07));
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
  height: 1.375rem;
  display: flex;
  align-items: center;
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
  gap: 0.625rem;
  justify-content: flex-start;
`;

export const Input = styled(InlineInput)`
  padding: 0;
`;

export const EditPopover = styled.div`
  display: flex;
  background: ${(props) => props.theme.commonColors.white};
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
    padding-bottom: 0;
  }
  color: ${(props) => props.theme.colors.text.main};
  cursor: pointer;
`;
