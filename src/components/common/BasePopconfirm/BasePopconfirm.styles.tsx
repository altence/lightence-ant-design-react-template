import styled, { useTheme } from 'styled-components';
import { Popconfirm as AntPopconfirm, ConfigProvider } from 'antd';

export const Popconfirm = styled((props: React.ComponentProps<typeof AntPopconfirm>) => {
  const theme = useTheme();
  return (
    <ConfigProvider
      theme={{
        components: {
          Popconfirm: {
            fontWeightStrong: theme.fontWeights.semibold,
            colorPrimary: theme.primary,
          },
        },
      }}
    >
      <AntPopconfirm {...props} />
    </ConfigProvider>
  );
})``;
