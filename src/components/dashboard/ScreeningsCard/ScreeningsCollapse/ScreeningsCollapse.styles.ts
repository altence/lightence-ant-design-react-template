import styled from 'styled-components';
import { Button, Typography, Avatar as AntAvatar } from 'antd';
import theme from '../../../../styles/theme';

interface CollapseProps {
  isCollapsed: boolean;
}

interface ListProps extends CollapseProps {
  isFirstActive: boolean;
  isSecondActive: boolean;
  isDowngrade: boolean;
}

export const Wrapper = styled.div<CollapseProps>`
  position: absolute;
  padding: 0.5rem;
  top: 1px;
  left: 0;
  height: 100%;
  box-shadow: 0px 4px 40px rgba(0, 0, 0, 0.07);
  transition: all 0.3s ease;

  width: ${(props) => (props.isCollapsed && '3rem') || '12rem'};

  background-color: ${(props) => props.theme.colors.secondary};

  @media only screen and ${theme.media.xxl} {
    padding: 1.25rem;

    width: ${(props) => (props.isCollapsed && '5rem') || '15rem'};
  }
`;

export const Text = styled(Typography.Text)`
  font-size: 0.625rem;
  white-space: nowrap;

  @media only screen and ${theme.media.xxl} {
    font-size: 0.75rem;
  }
`;

export const HeaderWrapper = styled.div<CollapseProps>`
  display: flex;
  align-items: center;
  margin-bottom: 0.3rem;
  font-size: 0.75rem;

  justify-content: ${(props) => (props.isCollapsed && 'center') || 'space-between'};

  @media only screen and ${theme.media.md} {
    & ${Text} {
      font-size: 0.75rem;
    }
  }

  @media only screen and ${theme.media.xl} {
    margin-bottom: 1rem;
  }
`;

export const ArrowBtn = styled(Button)`
  font-size: 0.5rem;
  padding: 0;
  height: 100%;
`;

export const List = styled.ul`
  list-style-type: none;
`;

export const Avatar = styled(AntAvatar)`
  max-width: 1.4rem;
  max-height: 1.4rem;

  @media only screen and ${theme.media.xxl} {
    max-width: 2.18rem;
    max-height: 2.18rem;
  }
`;

export const ListItem = styled.li<ListProps>`
  display: flex;
  align-items: center;
  margin-bottom: 0.4rem;
  cursor: pointer;

  justify-content: ${(props) => (props.isCollapsed && 'center') || 'space-between'};

  ${(props) => !props.isFirstActive && !props.isSecondActive && 'opacity: 0.5'};

  @media only screen and ${theme.media.xl} {
    margin-bottom: 0.8rem;
  }

  @media only screen and ${theme.media.xxl} {
    margin-bottom: 1.2rem;
  }

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

    color: ${(props) => (props.isDowngrade && props.theme.colors.main.error) || props.theme.colors.main.success};
  }

  & ${Avatar} {
    position: relative;

    &::after {
      position: absolute;
      content: '';
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 100%;
      height: 100%;

      border-radius: ${(props) => props.theme.border.radius};

      ${(props) =>
        (props.isFirstActive && `border: 2px solid ${props.theme.colors.primary}`) ||
        (props.isSecondActive && `border: 2px solid ${props.theme.colors.errorLight}`)};
    }
  }
`;
