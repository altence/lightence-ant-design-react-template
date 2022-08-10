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
          return css`
            color: var(--error-color);
          `;
        case 'warning':
          return css`
            color: var(--warning-color);
          `;
        case 'success':
          return css`
            color: var(--success-color);
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
