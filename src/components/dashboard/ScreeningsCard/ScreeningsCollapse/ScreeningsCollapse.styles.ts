import styled from 'styled-components';
import { Button, Typography } from 'antd';

interface CollapseProps {
  isCollapsed: boolean;
}

interface ListProps extends CollapseProps {
  isDowngrade: boolean;
}

export const Wrapper = styled.div<CollapseProps>`
  position: absolute;
  padding: 1.25rem;
  top: 1px;
  left: 0;
  height: 100%;
  z-index: 2;
  transition: all 0.3s ease;

  width: ${(props) => (props.isCollapsed && '7%') || '25%'};

  background-color: ${(props) => props.theme.colors.secondary};
`;

export const HeaderWrapper = styled.div<CollapseProps>`
  display: flex;
  align-items: center;
  margin-bottom: 0.625rem;

  justify-content: ${(props) => (props.isCollapsed && 'center') || 'space-between'};
`;

export const Text = styled(Typography.Text)`
  font-weight: 500;
  font-size: 0.75rem;
  white-space: nowrap;
`;

export const ArrowBtn = styled(Button)`
  font-size: 0.5rem;
`;

export const List = styled.ul`
  list-style-type: none;
`;

export const ListItem = styled.li<ListProps>`
  display: flex;
  align-items: center;
  margin-bottom: 0.4rem;

  justify-content: ${(props) => (props.isCollapsed && 'center') || 'space-between'};

  &:nth-last-of-type(1) {
    margin-bottom: 0;
  }

  & > ${Text}:nth-of-type(2) {
    width: 55%;
    padding: 0 0.5rem;
  }

  & > ${Text}:nth-of-type(3) {
    width: 20%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    color: ${(props) => (props.isDowngrade && props.theme.colors.error) || props.theme.colors.success};
  }
`;
