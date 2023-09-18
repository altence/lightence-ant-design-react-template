import styled, { useTheme } from 'styled-components';
import { ConfigProvider, Spin as AntSpin } from 'antd';
import { remToPixels } from '@app/utils/utils';

export const Spin = styled((props: React.ComponentProps<typeof AntSpin>) => {
  const theme = useTheme();
  return (
    <ConfigProvider
      theme={{
        components: {
          Spin: {
            controlHeight: remToPixels(theme.heights.xs),
            controlHeightLG: remToPixels(theme.heights.sm),
            colorPrimary: theme.primary,
          },
        },
      }}
    >
      <AntSpin {...props} />
    </ConfigProvider>
  );
})``;
