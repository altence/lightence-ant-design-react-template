import { Avatar, Space, Typography } from 'antd';
import styled, { css } from 'styled-components';
import { NotificationType } from './Notification';

interface SpacewWrapperProps {
  type: NotificationType;
}

export const NotificationIcon = styled(Avatar)``;

export const Title = styled(Typography.Text)`
  font-size: 0.875rem;
  font-weight: 600;
`;

export const Description = styled(Typography.Text)`
  font-size: 0.875rem;
`;

export const SpaceWrapper = styled(Space)<SpacewWrapperProps>`
  background-color: var(--background-color);

  & ${Title}, span[role='img'] {
    ${(props) => {
      switch (props.type) {
        case 'error':
        case 'warning':
        case 'success':
          return css`
            color: var(--${props.type}-color);
          `;
        case 'info':
        case 'mention':
          return css`
            color: var(--primary-color);
          `;
        default:
          return '';
      }
    }}
  }

  & span[role='img'] {
    font-size: 2rem;
  }
`;
