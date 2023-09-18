import styled, { useTheme } from 'styled-components';
import { ConfigProvider, Empty as AntEmpty } from 'antd';
import { remToPixels } from '@app/utils/utils';

export const Empty = styled((props: React.ComponentProps<typeof AntEmpty>) => {
  const theme = useTheme();
  return (
    <ConfigProvider
      theme={{
        components: {
          Empty: {
            controlHeightLG: remToPixels(theme.heights.sm),
          },
        },
      }}
    >
      <AntEmpty {...props} />
    </ConfigProvider>
  );
})``;
