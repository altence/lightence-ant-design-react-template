import styled, { useTheme } from 'styled-components';
import { Alert as AntAlert, ConfigProvider } from 'antd';

export const Alert = styled((props: React.ComponentProps<typeof AntAlert>) => {
  const theme = useTheme();
  return (
    <ConfigProvider
      theme={{
        components: {
          Alert: {
            colorInfoBg: '#dfefff',
            colorText: theme.black,
            colorTextHeading: theme.black,
            marginSM: 15,
            paddingContentVerticalSM: 8,
            paddingMD: 15,
            paddingContentHorizontalLG: 15,
          },
        },
      }}
    >
      <AntAlert {...props} />
    </ConfigProvider>
  );
})`
  &.ant-alert {
    padding-inline: 15px;
  }

  .ant-alert-action {
    margin-inline-start: 8px;
  }
`;
