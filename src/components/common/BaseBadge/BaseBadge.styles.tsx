import { colorTypeFrom, remToPixels } from '@app/utils/utils';
import { Badge as AntBadge, ConfigProvider } from 'antd';
import styled, { useTheme } from 'styled-components';
import { NotificationType } from '../BaseNotification/BaseNotification';

interface BadgeProps {
  $severity?: NotificationType;
}

export const Badge = styled((props: React.ComponentProps<typeof AntBadge>) => {
  const theme = useTheme();
  return (
    <ConfigProvider
      theme={{
        components: {
          Badge: {
            colorPrimary: theme.primary,
            colorTextPlaceholder: '#d9d9d9',
            fontSizeSM: remToPixels(theme.fontSizes.xxs),
          },
        },
      }}
    >
      <AntBadge {...props} />
    </ConfigProvider>
  );
})<BadgeProps>`
  .ant-badge-count {
    background: ${({ $severity, theme }) => theme[colorTypeFrom($severity)]};
    font-size: ${({ theme }) => theme.fontSizes.xs};
  }

  .ant-badge-count-sm {
    font-size: ${({ theme }) => theme.fontSizes.xs};
  }
`;
