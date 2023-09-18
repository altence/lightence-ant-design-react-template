import styled, { useTheme } from 'styled-components';
import { Rate as AntRate, ConfigProvider } from 'antd';

export const Rate = styled((props: React.ComponentProps<typeof AntRate>) => {
  const theme = useTheme();
  return (
    <ConfigProvider
      theme={{
        components: {
          Rate: {
            starColor: '#ffc24b',
            colorFillContent: theme.split,
          },
        },
      }}
    >
      <AntRate {...props} />
    </ConfigProvider>
  );
})`
  font-size: ${({ theme }) => theme.fontSizes.lg};
`;
