import type { NotificationInstance } from 'antd/es/notification/interface';
import styled, { css } from 'styled-components';
import { CheckCircleFilled, ExclamationCircleFilled, InfoCircleFilled, StopFilled } from '@ant-design/icons';
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

const openSuccess = (notification: NotificationType): NotificationType['success'] => {
  return ({ message, description, ...props }) =>
    notification.success({
      icon: (
        <IconWrapper $isOnlyTitle={!description}>
          <CheckCircleFilled className="ant-notification-notice-icon-success" />
        </IconWrapper>
      ),
      message: <Message $isOnlyTitle={!description}>{message}</Message>,
      description: description ? <Description>{description}</Description> : <EmptyDescription />,
      ...props,
    });
};

const openInfo = (notification: NotificationType): NotificationType['info'] => {
  return ({ message, description, ...props }) =>
    notification.info({
      icon: (
        <IconWrapper $isOnlyTitle={!description}>
          <InfoCircleFilled className="ant-notification-notice-icon-info" />
        </IconWrapper>
      ),
      message: <Message $isOnlyTitle={!description}>{message}</Message>,
      description: description ? <Description>{description}</Description> : <EmptyDescription />,
      ...props,
    });
};

const openWarning = (notification: NotificationType): NotificationType['warning'] => {
  return ({ message, description, ...props }) =>
    notification.warning({
      icon: (
        <IconWrapper $isOnlyTitle={!description}>
          <ExclamationCircleFilled className="ant-notification-notice-icon-warning" />
        </IconWrapper>
      ),
      message: <Message $isOnlyTitle={!description}>{message}</Message>,
      description: description ? <Description>{description}</Description> : <EmptyDescription />,
      ...props,
    });
};

const openError = (notification: NotificationType): NotificationType['error'] => {
  return ({ message, description, ...props }) =>
    notification.error({
      icon: (
        <IconWrapper $isOnlyTitle={!description}>
          <StopFilled className="ant-notification-notice-icon-error" />
        </IconWrapper>
      ),
      message: <Message $isOnlyTitle={!description}>{message}</Message>,
      description: description ? <Description>{description}</Description> : <EmptyDescription />,
      ...props,
    });
};

export const notificationController = (notification: NotificationType): NotificationType => ({
  success: openSuccess(notification),
  info: openInfo(notification),
  warning: openWarning(notification),
  error: openError(notification),
});
