import styled from 'styled-components';
import {
  CardRightContent as RightContent,
  CardTitle as Title,
  CardHeader as Header,
  Detail,
  MovableCardWrapper,
  Footer,
} from 'react-trello/dist/styles/Base';
import { DownOutlined } from '@ant-design/icons';
import { Collapse, Menu } from 'antd';
import InlineInput from 'react-trello/dist/widgets/InlineInput';

const { Panel } = Collapse;

interface ArrowDownIcon {
  $expanded: boolean;
}

export const CardContent = styled(Panel)`
  & .ant-collapse-content .ant-collapse-content-box {
    padding: 0;
  }
`;

export const CollapseCard = styled(Collapse)`
  background: transparent;
  & .ant-collapse-item {
    border: none;
  }
  & .ant-collapse-item.ant-collapse-no-arrow > .ant-collapse-header {
    padding: 0;
  }

  & .ant-collapse-item > .ant-collapse-content > .ant-collapse-content-box {
    padding: 0;
  }
`;

export const ParticipantsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const ArrowDownIcon = styled(DownOutlined)<ArrowDownIcon>`
  transform: ${(props) => `rotate(${props.$expanded ? 0 : 180}deg)`};
`;

export const CardWrapper = styled(MovableCardWrapper)`
  position: relative;
`;

export const CardRightContent = styled(RightContent)`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 1rem;
  padding-right: 0;
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
  min-height: 1.375rem;
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

export const CardMenu = styled(Menu)`
  box-shadow: ${(props) => props.theme.boxShadow.hover};
`;

export const MenuItem = styled(Menu.Item)`
  font-size: ${(props) => props.theme.commonFontSizes.xs};
`;

export const Input = styled(InlineInput)`
  && {
    max-height: 28.125rem;
  }
`;
