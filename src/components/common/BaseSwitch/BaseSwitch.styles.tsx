import styled, { useTheme } from 'styled-components';
import { Switch as AntSwitch, ConfigProvider } from 'antd';
import { remToPixels } from '@app/utils/utils';

export const Switch = styled((props: React.ComponentProps<typeof AntSwitch>) => {
  const theme = useTheme();
  return (
    <ConfigProvider
      theme={{
        components: {
          Switch: {
            controlHeight: remToPixels(theme.heights.xs),
            colorPrimary: theme.primary,
            colorWhite: theme.background,
            lineHeight: 1.375,
            colorPrimaryBorder: theme.primary1,
            opacityLoading: 0.4,
          },
        },
      }}
    >
      <AntSwitch {...props} />
    </ConfigProvider>
  );
})`
  &.ant-switch-checked:focus {
    box-shadow: 0 0 0 2px ${({ theme }) => theme.primary1};
  }

  &.ant-switch[aria-checked='false'] {
    background-image: linear-gradient(to right, ${({ theme }) => theme.disabled}, ${({ theme }) => theme.disabled}),
      linear-gradient(to right, ${({ theme }) => theme.background}, ${({ theme }) => theme.background});
  }
`;
