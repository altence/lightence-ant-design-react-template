import styled, { useTheme } from 'styled-components';
import { Progress as AntProgress, ConfigProvider } from 'antd';

export const Progress = styled((props: React.ComponentProps<typeof AntProgress>) => {
  const theme = useTheme();
  return (
    <ConfigProvider
      theme={{
        components: {
          Progress: {
            marginXS: 0,
            colorFillSecondary: theme.backgroundColorBase,
          },
        },
      }}
    >
      <AntProgress {...props} />
    </ConfigProvider>
  );
})``;
