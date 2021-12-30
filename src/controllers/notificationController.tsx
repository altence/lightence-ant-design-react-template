import { notification } from 'antd';
import styled from 'styled-components';
import { CheckCircleFilled, ExclamationCircleFilled, InfoCircleFilled } from '@ant-design/icons';
import { ReactComponent as ErrorIcon } from 'assets/icons/error-notification.svg';
import theme from 'styles/theme';

interface NotificationTitleProps {
  color?: string;
}

const SuccessIcon = styled(CheckCircleFilled)`
  color: ${theme.colors.main.success};
`;

const InfoIcon = styled(InfoCircleFilled)`
  color: ${theme.colors.main.primary};
`;

const WarningIcon = styled(ExclamationCircleFilled)`
  color: ${theme.colors.main.warning};
`;

const NotificationTitle = styled.div<NotificationTitleProps>`
  color: ${(props) => props.color};
  font-size: ${theme.commonFontSizes.xxl};
  font-weight: ${theme.commonFontWeight.bold};
`;

const NotificationDescription = styled.div`
  color: ${theme.colors.text.main}};
  font-size: ${theme.commonFontSizes.md};
  font-weight: ${theme.commonFontWeight.semibold};
  line-height: 1.375rem;
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
    icon: <SuccessIcon />,
    message: <NotificationTitle color={theme.colors.main.success}>{config.message}</NotificationTitle>,
    description: <NotificationDescription>{config.description}</NotificationDescription>,
  });
};

const openInfoNotification = (config: NotificationProps): void => {
  notification.info({
    ...config,
    icon: <InfoIcon />,
    message: <NotificationTitle color={theme.colors.main.primary}>{config.message}</NotificationTitle>,
    description: <NotificationDescription>{config.description}</NotificationDescription>,
  });
};

const openWarningNotification = (config: NotificationProps): void => {
  notification.warning({
    ...config,
    icon: <WarningIcon />,
    message: <NotificationTitle color={theme.colors.main.warning}>{config.message}</NotificationTitle>,
    description: <NotificationDescription>{config.description}</NotificationDescription>,
  });
};

const openErrorNotification = (config: NotificationProps): void => {
  notification.error({
    ...config,
    icon: <ErrorIcon />,
    message: <NotificationTitle color={theme.colors.main.error}>{config.message}</NotificationTitle>,
    description: <NotificationDescription>{config.description}</NotificationDescription>,
  });
};

export const notificationController = {
  success: openSuccessNotification,
  info: openInfoNotification,
  warning: openWarningNotification,
  error: openErrorNotification,
};
