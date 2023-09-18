import styled, { useTheme } from 'styled-components';
import { Tabs as AntTabs, ConfigProvider } from 'antd';

export const Tabs = styled((props: React.ComponentProps<typeof AntTabs>) => {
  const theme = useTheme();
  return (
    <ConfigProvider
      theme={{
        components: {
          Tabs: {
            colorPrimaryHover: theme.primary5,
            colorPrimary: theme.primary,
            colorPrimaryActive: theme.primary7,
            colorTextDisabled: theme.disabled,
            colorBorderSecondary: theme.split,
          },
        },
      }}
    >
      <AntTabs {...props} />
    </ConfigProvider>
  );
})`
  .ant-tabs-tab.ant-tabs-tab-disabled {
    color: ${({ theme }) => theme.disabled};
  }

  &.ant-tabs .ant-tabs-tab:not(.ant-tabs-tab-active) {
    .ant-tabs-tab-btn,
    .ant-tabs-tab-remove {
      &:focus-visible {
        color: ${({ theme }) => theme.primary7};
      }
    }
  }
`;
