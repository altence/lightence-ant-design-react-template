import type { IconType, NotificationInstance, ArgsProps } from 'antd/es/notification/interface';
import styled, { css } from 'styled-components';
import { CheckCircleFilled, ExclamationCircleFilled, InfoCircleFilled, StopFilled } from '@ant-design/icons';
import { colorTypeFrom } from '@app/utils/utils';

interface IconWrapperProps {
  $isOnlyTitle: boolean;
}

const IconWrapper = styled.div<IconWrapperProps>`
  font-size: ${(props) => (props.$isOnlyTitle ? props.theme.fontSizes.xxxxl : '3rem')};
  line-height: 2rem;
`;

interface MessageProps extends IconWrapperProps {
  $type: IconType;
}

const Message = styled.div<MessageProps>`
  display: flex;
  align-items: center;
  margin-bottom: -0.5rem;

  ${(props) =>
    props.$isOnlyTitle
      ? css`
          font-size: ${props.theme.fontSizes.md};
          height: ${props.theme.heights.xs};
          font-weight: ${props.theme.fontWeights.semibold};
          margin-inline-start: 9px;
        `
      : css`
          font-size: ${props.theme.fontSizes.xxl};
          height: 3rem;
          font-weight: ${props.theme.fontWeights.bold};
          margin-inline-start: 21px;
        `}

  .ant-notification-notice.ant-notification-notice-${(props) => props.$type} & {
    color: ${(props) => props.theme[colorTypeFrom(props.$type)]};
  }
`;

const Description = styled.div`
  color: ${({ theme }) => theme.textDark};
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  line-height: 1.375rem;
  margin-inline-start: 22px;
`;

const EmptyDescription = styled.div`
  margin-top: -0.75rem;
`;

type NotificationType = Pick<NotificationInstance, IconType>;

type NotificationOpener = (props: Omit<ArgsProps, 'type'>) => void;

const Icons = {
  success: CheckCircleFilled,
  warning: ExclamationCircleFilled,
  info: InfoCircleFilled,
  error: StopFilled,
} as const;

const open = (type: IconType, notification: NotificationType): NotificationOpener => {
  const Icon = Icons[type];

  return ({ message, description, ...props }) =>
    notification[type]({
      icon: (
        <IconWrapper $isOnlyTitle={!description}>
          <Icon className={`ant-notification-notice-icon-${type}`} />
        </IconWrapper>
      ),
      message: (
        <Message $isOnlyTitle={!description} $type={type}>
          {message}
        </Message>
      ),
      description: description ? <Description>{description}</Description> : <EmptyDescription />,
      style: {
        minHeight: '6rem',
        padding: '2rem',
      },
      ...props,
      type,
    });
};

export const notificationController = (notification: NotificationType): Record<IconType, NotificationOpener> => ({
  success: open('success', notification),
  info: open('info', notification),
  warning: open('warning', notification),
  error: open('error', notification),
});
