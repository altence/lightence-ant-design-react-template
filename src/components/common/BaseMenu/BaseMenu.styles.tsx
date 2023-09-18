import styled, { useTheme } from 'styled-components';
import { Menu as AntMenu, ConfigProvider } from 'antd';
import { hexToRGB, remToPixels } from '@app/utils/utils';
import { themeObject } from '@app/styles/themes/themeVariables';

export const Menu = styled((props: React.ComponentProps<typeof AntMenu>) => {
  const theme = useTheme();
  return (
    <ConfigProvider
      theme={{
        components: {
          Menu: {
            controlHeightLG: remToPixels(theme.heights.md),
            fontSize: remToPixels(theme.fontSizes.xs),
            colorFillAlter: `rgba(${hexToRGB(themeObject['light'].primary6)}, 0.05)`,
            colorBgContainer: 'unset',
            controlItemBgActive: 'unset',
            colorBgTextHover: 'transparent',
            itemSelectedColor: theme.textSiderPrimary,
            colorText: theme.textSiderSecondary,
            colorSplit: 'transparent',
            activeBarWidth: 2,
            marginXXS: 4,
            controlHeightSM: 30,
            itemMarginInline: 0,
          },
        },
      }}
    >
      <AntMenu {...props} />
    </ConfigProvider>
  );
})`
  &.ant-menu .ant-menu-item-icon {
    font-size: ${({ theme }) => theme.fontSizes.xl};
    width: 1.25rem;
  }

  .ant-menu-item,
  .ant-menu-submenu {
    font-size: ${({ theme }) => theme.fontSizes.xs};
    border-radius: 0;
  }

  .ant-menu-item {
    fill: currentColor;
  }

  .ant-menu-inline,
  .ant-menu-vertical {
    border-right: 0;
  }
`;
