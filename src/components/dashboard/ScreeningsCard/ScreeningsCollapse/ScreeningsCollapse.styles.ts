import styled from 'styled-components';
import { Button, Avatar as AntAvatar, Typography } from 'antd';

interface CollapseProps {
  isCollapsed: boolean;
}

interface PercentageProps {
  isDowngrade: boolean;
}

export const Wrapper = styled.div<CollapseProps>`
  position: absolute;
  padding: 1.25rem;
  height: 100%;
  text-align: center;
  z-index: 2;
  transition: all 0.3s ease;

  width: ${(props) => (props.isCollapsed && '5rem') || '13.5rem'};

  background-color: ${(props) => props.theme.colors.secondary};
`;

export const ArrowBtn = styled(Button)`
  margin-bottom: 0.5rem;
`;

export const Arrow = styled.div`
  font-size: 0.5rem;
`;

export const List = styled.ul`
  list-style-type: none;
  text-align: center;
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 0.43rem;

  &:nth-last-of-type(1) {
    margin-bottom: 0;
  }
`;

export const Avatar = styled(AntAvatar)<CollapseProps>`
  width: 2.18rem;
  height: 2.18rem;

  ${(props) => (props.isCollapsed && 'margin: 0 auto') || 'margin-right: 0.375rem'}
`;

export const Text = styled(Typography.Text)`
  font-size: 0.75rem;
  white-space: nowrap;
`;

export const Percentage = styled(Typography.Text)<PercentageProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.75rem;
  margin-left: auto;
  width: 2.6rem;
  white-space: nowrap;

  color: ${(props) => (props.isDowngrade && props.theme.colors.fail) || props.theme.colors.success};

  & span {
    margin-right: 0.25rem;
  }
`;
