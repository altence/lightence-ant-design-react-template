import { Divider as AntDivider, ConfigProvider } from 'antd';
import styled from 'styled-components';

export const Divider = styled((props: React.ComponentProps<typeof AntDivider>) => (
  <ConfigProvider
    theme={{
      components: {
        Divider: {
          colorSplit: 'rgba(0, 0, 0, 0.06)',
        },
      },
    }}
  >
    <AntDivider {...props} />
  </ConfigProvider>
))``;
