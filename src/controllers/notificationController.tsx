import React from 'react';
import { notification } from 'antd';
import styled from 'styled-components';
import { CheckCircleFilled, ExclamationCircleFilled, InfoCircleFilled, StopFilled } from '@ant-design/icons';
import { ArgsProps } from 'antd/lib/notification/interface';
import { FONT_FAMILY, FONT_SIZE, FONT_WEIGHT } from '@app/styles/themes/constants';

interface IconWrapperProps {
  $isOnlyTitle: boolean;
}

const IconWrapper = styled.div<IconWrapperProps>`
  font-size: ${(props) => (props.$isOnlyTitle ? '2rem' : '3rem')};
  line-height: 2rem;
`;

const Message = styled.div`
  &.title {
    font-size: ${FONT_SIZE.xxl};
    height: 3rem;
    margin-left: 1.5rem;
    display: flex;
    align-items: center;
    font-weight: ${FONT_WEIGHT.bold};
    font-family: '${FONT_FAMILY.main}', sans-serif;

    &.title-only {
      color: var(--text-main-color);
      font-size: ${FONT_SIZE.md};
      height: 2rem;
      line-height: 2rem;
      margin-left: 0.75rem;
      font-weight: ${FONT_WEIGHT.semibold};
    }
  }

  &[class^='ant-notification'],
  &[class*=' ant-notification'] {
    font-family: '${FONT_FAMILY.main}', sans-serif;
  }

  .ant-notification-notice.ant-notification-notice-success &.title {
    color: var(--success-color);
  }

  .ant-notification-notice.ant-notification-notice-info &.title {
    color: var(--primary-color);
  }

  .ant-notification-notice.ant-notification-notice-warning &.title {
    color: var(--warning-color);
  }

  .ant-notification-notice.ant-notification-notice-error &.title {
    color: var(--error-color);
  }
`;

const Description = styled.div`
  color: #404040;
  font-size: ${FONT_SIZE.md};
  font-weight: ${FONT_WEIGHT.semibold};
  line-height: 1.375rem;
  font-family: '${FONT_FAMILY.main}', sans-serif;
`;

const EmptyDescription = styled.div`
  margin-top: -0.75rem;
`;

const SuccessIcon = styled(CheckCircleFilled)`
  color: var(--success-color);
`;
const InfoIcon = styled(InfoCircleFilled)`
  color: var(--primary-color);
`;
const WarningIcon = styled(ExclamationCircleFilled)`
  color: var(--warning-color);
`;

const ErrorIcon = styled(StopFilled)`
  color: var(--error-color);
`;

type NotificationProps = ArgsProps;

const openSuccessNotification = (config: NotificationProps): void => {
  notification.success({
    ...config,
    icon: (
      <IconWrapper $isOnlyTitle={!config.description}>
        <SuccessIcon />
      </IconWrapper>
    ),
    message: <Message className={`title ${config.description ? '' : 'title-only'}`}>{config.message}</Message>,
    description: config.description ? <Description>{config.description}</Description> : <EmptyDescription />,
    className: config.description ? '' : 'notification-without-description',
  });
};

const openInfoNotification = (config: NotificationProps): void => {
  notification.info({
    ...config,
    icon: (
      <IconWrapper $isOnlyTitle={!config.description}>
        <InfoIcon />
      </IconWrapper>
    ),
    message: <Message className={`title ${config.description ? '' : 'title-only'}`}>{config.message}</Message>,
    description: config.description ? <Description>{config.description}</Description> : <EmptyDescription />,
    className: config.description ? '' : 'notification-without-description',
  });
};

const openWarningNotification = (config: NotificationProps): void => {
  notification.warning({
    ...config,
    icon: (
      <IconWrapper $isOnlyTitle={!config.description}>
        <WarningIcon />
      </IconWrapper>
    ),
    message: <Message className={`title ${config.description ? '' : 'title-only'}`}>{config.message}</Message>,
    description: config.description ? <Description>{config.description}</Description> : <EmptyDescription />,
    className: config.description ? '' : 'notification-without-description',
  });
};

const openErrorNotification = (config: NotificationProps): void => {
  notification.error({
    ...config,
    icon: (
      <IconWrapper $isOnlyTitle={!config.description}>
        <ErrorIcon />
      </IconWrapper>
    ),
    message: <Message className={`title ${config.description ? '' : 'title-only'}`}>{config.message}</Message>,
    description: config.description ? <Description>{config.description}</Description> : <EmptyDescription />,
    className: config.description ? '' : 'notification-without-description',
  });
};

export const notificationController = {
  success: openSuccessNotification,
  info: openInfoNotification,
  warning: openWarningNotification,
  error: openErrorNotification,
};
