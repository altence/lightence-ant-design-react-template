import type { NotificationInstance } from 'antd/es/notification/interface';
import styled, { css } from 'styled-components';
import { CheckCircleFilled, ExclamationCircleFilled, InfoCircleFilled, StopFilled } from '@ant-design/icons';
import { ArgsProps as NotificationProps } from 'antd/lib/notification/interface';
import { FONT_SIZE, FONT_WEIGHT } from '@app/styles/themes/constants';

interface IconWrapperProps {
  $isOnlyTitle: boolean;
}

const IconWrapper = styled.div<IconWrapperProps>`
  font-size: ${(props) => (props.$isOnlyTitle ? '2rem' : '3rem')};
  line-height: 2rem;
`;

const Message = styled.div<IconWrapperProps>`
  display: flex;
  align-items: center;
  margin-bottom: -0.5rem;

  ${(props) =>
    props.$isOnlyTitle
      ? css`
          font-size: ${FONT_SIZE.md};
          height: 2rem;
          font-weight: ${FONT_WEIGHT.semibold};
          margin-inline-start: 9px;
        `
      : css`
          font-size: ${FONT_SIZE.xxl};
          height: 3rem;
          font-weight: ${FONT_WEIGHT.bold};
          margin-inline-start: 21px;
        `}

  .ant-notification-notice.ant-notification-notice-success & {
    color: var(--success-color);
  }

  .ant-notification-notice.ant-notification-notice-info & {
    color: var(--primary-color);
  }

  .ant-notification-notice.ant-notification-notice-warning & {
    color: var(--warning-color);
  }

  .ant-notification-notice.ant-notification-notice-error & {
    color: var(--error-color);
  }
`;

const Description = styled.div`
  color: #404040;
  font-size: ${FONT_SIZE.md};
  font-weight: ${FONT_WEIGHT.semibold};
  line-height: 1.375rem;
  margin-inline-start: 22px;
`;

const EmptyDescription = styled.div`
  margin-top: -0.75rem;
`;

type NotificationType = Pick<NotificationInstance, 'success' | 'info' | 'warning' | 'error'>;

const openSuccess = (notification: NotificationType) => (config: NotificationProps) => {
  notification.success({
    ...config,
    icon: (
      <IconWrapper $isOnlyTitle={!config.description}>
        <CheckCircleFilled className="ant-notification-notice-icon-success" />
      </IconWrapper>
    ),
    message: <Message $isOnlyTitle={!config.description}>{config.message}</Message>,
    description: config.description ? <Description>{config.description}</Description> : <EmptyDescription />,
  });
};

const openInfo = (notification: NotificationType) => (config: NotificationProps) => {
  notification.info({
    ...config,
    icon: (
      <IconWrapper $isOnlyTitle={!config.description}>
        <InfoCircleFilled className="ant-notification-notice-icon-info" />
      </IconWrapper>
    ),
    message: <Message $isOnlyTitle={!config.description}>{config.message}</Message>,
    description: config.description ? <Description>{config.description}</Description> : <EmptyDescription />,
  });
};

const openWarning = (notification: NotificationType) => (config: NotificationProps) => {
  notification.warning({
    ...config,
    icon: (
      <IconWrapper $isOnlyTitle={!config.description}>
        <ExclamationCircleFilled className="ant-notification-notice-icon-warning" />
      </IconWrapper>
    ),
    message: <Message $isOnlyTitle={!config.description}>{config.message}</Message>,
    description: config.description ? <Description>{config.description}</Description> : <EmptyDescription />,
  });
};

const openError = (notification: NotificationType) => (config: NotificationProps) => {
  notification.error({
    ...config,
    icon: (
      <IconWrapper $isOnlyTitle={!config.description}>
        <StopFilled className="ant-notification-notice-icon-error" />
      </IconWrapper>
    ),
    message: <Message $isOnlyTitle={!config.description}>{config.message}</Message>,
    description: config.description ? <Description>{config.description}</Description> : <EmptyDescription />,
  });
};

export const notificationController = (notification: NotificationType): NotificationType => ({
  success: openSuccess(notification),
  info: openInfo(notification),
  warning: openWarning(notification),
  error: openError(notification),
});
