import styled, { useTheme } from 'styled-components';
import { Breadcrumb as AntBreadcrumb, ConfigProvider } from 'antd';

export const Breadcrumb = styled((props: React.ComponentProps<typeof AntBreadcrumb>) => {
  const theme = useTheme();
  return (
    <ConfigProvider
      theme={{
        components: {
          Breadcrumb: {
            fontSizeIcon: 10,
            colorTextDescription: theme.breadcrumb,
          },
        },
      }}
    >
      <AntBreadcrumb {...props} />
    </ConfigProvider>
  );
})`
  &.ant-breadcrumb {
    li:last-child {
      .ant-breadcrumb-link {
        color: ${({ theme }) => theme.textMain};
      }
    }
  }
`;
