import React from 'react';
import { notification } from 'antd';
import styled from 'styled-components';
import { CheckCircleFilled, ExclamationCircleFilled, InfoCircleFilled } from '@ant-design/icons';
import { ReactComponent as ErrorIcon } from 'assets/icons/error-notification.svg';
import lightTheme from '@app/styles/themes/light/lightTheme';

interface NotificationTitleProps {
  $color?: string;
  $isOnlyTitle: boolean;
}

interface IconWrapperProps {
  $isOnlyTitle: boolean;
}

const IconWrapper = styled.div<IconWrapperProps>`
  font-size: ${(props) => (props.$isOnlyTitle ? '2.1875rem' : '2.8125rem')};
  line-height: 2.8125rem;
  ${(props) =>
    props.$isOnlyTitle &&
    'display: flex; align-items: center; justify-content: center; height: 2.1875rem; width: 2.1875rem;'}
`;

const SuccessIcon = styled(CheckCircleFilled)`
  color: ${lightTheme.colors.main.success};
`;

const InfoIcon = styled(InfoCircleFilled)`
  color: ${lightTheme.colors.main.primary};
`;

const WarningIcon = styled(ExclamationCircleFilled)`
  color: ${lightTheme.colors.main.warning};
`;

const NotificationTitle = styled.div<NotificationTitleProps>`
  color: ${(props) => (props.$isOnlyTitle ? lightTheme.colors.text.main : props.color)};
  font-size: ${(props) => (props.$isOnlyTitle ? lightTheme.commonFontSizes.md : lightTheme.commonFontSizes.xxl)};
  font-weight: ${(props) =>
    props.$isOnlyTitle ? lightTheme.commonFontWeight.semibold : lightTheme.commonFontWeight.bold};
  height: ${(props) => (props.$isOnlyTitle ? '2.1875rem' : '2.8125rem')};
  display: flex;
  align-items: center;
  margin-left: ${(props) => (props.$isOnlyTitle ? '0.625rem' : '1.5625rem')};
`;

const NotificationDescription = styled.div`
  color: ${lightTheme.colors.text.main};
  font-size: ${lightTheme.commonFontSizes.md};
  font-weight: ${lightTheme.commonFontWeight.semibold};
  line-height: 1.375rem;
`;

const EmptyDescription = styled.div`
  margin-top: -0.625rem;
`;

type NotificationPlacement = 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight';

interface NotificationProps {
  message: React.ReactNode;
  description?: React.ReactNode;
  btn?: React.ReactNode;
  key?: string;
  onClose?: () => void;
  duration?: number | null;
  icon?: React.ReactNode;
  placement?: NotificationPlacement;
  style?: React.CSSProperties;
  prefixCls?: string;
  className?: string;
  onClick?: () => void;
  top?: number;
  bottom?: number;
  getContainer?: () => HTMLElement;
  closeIcon?: React.ReactNode;
}

const openSuccessNotification = (config: NotificationProps): void => {
  notification.success({
    ...config,
    icon: (
      <IconWrapper $isOnlyTitle={!config.description}>
        <SuccessIcon />
      </IconWrapper>
    ),
    message: (
      <NotificationTitle color={lightTheme.colors.main.success} $isOnlyTitle={!config.description}>
        {config.message}
      </NotificationTitle>
    ),
    description: config.description ? (
      <NotificationDescription>{config.description}</NotificationDescription>
    ) : (
      <EmptyDescription />
    ),
    style: {
      padding: config.description ? '1.9375rem 2.5rem' : '1.1875rem 2.5rem',
      border: `1px solid ${lightTheme.colors.main.success}`,
      background: lightTheme.colors.notifications.success,
    },
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
    message: (
      <NotificationTitle color={lightTheme.colors.main.primary} $isOnlyTitle={!config.description}>
        {config.message}
      </NotificationTitle>
    ),
    description: config.description ? (
      <NotificationDescription>{config.description}</NotificationDescription>
    ) : (
      <EmptyDescription />
    ),
    style: {
      padding: config.description ? '1.9375rem 2.5rem' : '1.1875rem 2.5rem',
      border: `1px solid ${lightTheme.colors.main.primary}`,
      background: lightTheme.colors.notifications.primary,
    },
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
    message: (
      <NotificationTitle color={lightTheme.colors.main.warning} $isOnlyTitle={!config.description}>
        {config.message}
      </NotificationTitle>
    ),
    description: config.description ? (
      <NotificationDescription>{config.description}</NotificationDescription>
    ) : (
      <EmptyDescription />
    ),
    style: {
      padding: config.description ? '1.9375rem 2.5rem' : '1.1875rem 2.5rem',
      border: `1px solid ${lightTheme.colors.main.warning}`,
      background: lightTheme.colors.notifications.warning,
    },
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
    message: (
      <NotificationTitle color={lightTheme.colors.main.error} $isOnlyTitle={!config.description}>
        {config.message}
      </NotificationTitle>
    ),
    description: config.description ? (
      <NotificationDescription>{config.description}</NotificationDescription>
    ) : (
      <EmptyDescription />
    ),
    style: {
      padding: config.description ? '1.9375rem 2.5rem' : '1.1875rem 2.5rem',
      border: `1px solid ${lightTheme.colors.main.error}`,
      background: lightTheme.colors.notifications.error,
    },
    className: config.description ? '' : 'notification-without-description',
  });
};

export const notificationController = {
  success: openSuccessNotification,
  info: openInfoNotification,
  warning: openWarningNotification,
  error: openErrorNotification,
};
