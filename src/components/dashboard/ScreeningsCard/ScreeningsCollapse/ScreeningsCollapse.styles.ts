import styled from 'styled-components';
import { Button, Typography, Avatar as AntAvatar } from 'antd';

interface CollapseProps {
  isCollapsed: boolean;
}

interface ListProps extends CollapseProps {
  isDowngrade: boolean;
}

export const Wrapper = styled.div<CollapseProps>`
  position: absolute;
  padding: 0.5rem;
  top: 1px;
  left: 0;
  height: 100%;
  z-index: 2;
  box-shadow: 0px 4px 40px rgba(0, 0, 0, 0.07);
  transition: all 0.3s ease;

  width: ${(props) => (props.isCollapsed && '3rem') || '12rem'};

  background-color: ${(props) => props.theme.colors.secondary};
`;

export const HeaderWrapper = styled.div<CollapseProps>`
  display: flex;
  align-items: center;
  margin-bottom: 0.2rem;
  font-size: 0.75rem;

  justify-content: ${(props) => (props.isCollapsed && 'center') || 'space-between'};
`;

export const Text = styled(Typography.Text)`
  font-weight: 500;
  font-size: 0.625rem;
  white-space: nowrap;
`;

export const ArrowBtn = styled(Button)`
  font-size: 0.5rem;
  padding: 0;
  height: 100%;
`;

export const List = styled.ul`
  list-style-type: none;
`;

export const ListItem = styled.li<ListProps>`
  display: flex;
  align-items: center;
  margin-bottom: 0.2rem;

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

export const Avatar = styled(AntAvatar)`
  max-width: 1.6rem;
  max-height: 1.6rem;
`;
