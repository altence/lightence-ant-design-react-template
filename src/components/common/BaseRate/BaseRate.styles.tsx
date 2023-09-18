import styled from 'styled-components';
import { Rate as AntRate, ConfigProvider } from 'antd';

export const Rate = styled((props: React.ComponentProps<typeof AntRate>) => (
  <ConfigProvider
    theme={{
      components: {
        Rate: {
          starColor: '#ffc24b',
          colorFillContent: '#f0f0f0',
        },
      },
    }}
  >
    <AntRate {...props} />
  </ConfigProvider>
))`
  font-size: ${({ theme }) => theme.fontSizes.lg};
`;
