import styled, { useTheme } from 'styled-components';
import { Result as AntResult, ConfigProvider } from 'antd';
import { remToPixels } from '@app/utils/utils';

export const Result = styled((props: React.ComponentProps<typeof AntResult>) => {
  const theme = useTheme();
  return (
    <ConfigProvider
      theme={{
        components: {
          Result: {
            fontSizeHeading3: remToPixels(theme.fontSizes.xxl),
            lineHeightHeading3: 1.8,
          },
        },
      }}
    >
      <AntResult {...props} />
    </ConfigProvider>
  );
})`
  .ant-result-title {
    margin: 0;
  }
`;
