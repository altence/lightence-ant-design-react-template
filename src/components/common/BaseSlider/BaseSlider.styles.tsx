import styled, { useTheme } from 'styled-components';
import { Slider as AntSlider, ConfigProvider } from 'antd';

export const Slider = styled((props: React.ComponentProps<typeof AntSlider>) => {
  const theme = useTheme();
  return (
    <ConfigProvider
      theme={{
        components: {
          Slider: {
            colorPrimaryBorder: theme.primary3,
            colorPrimary: theme.primary4,
            colorPrimaryBorderHover: theme.primary4,
            colorFillSecondary: '#e1e1e1',
            colorBorderSecondary: '#e1e1e1',
            colorFillContentHover: '#e1e1e1',
            colorFillTertiary: theme.backgroundColorBase,
            handleSize: 11,
            handleSizeHover: 11,
            handleLineWidth: 2,
            handleLineWidthHover: 2,
            colorTextDisabled: theme.disabled,
          },
        },
      }}
    >
      <AntSlider {...props} />
    </ConfigProvider>
  );
})`
  &.ant-slider.ant-slider-disabled .ant-slider-rail {
    background-color: ${({ theme }) => theme.backgroundColorBase} !important;
  }

  &.ant-slider .ant-slider-handle:focus::after {
    outline: 6px solid rgba(${({ theme }) => theme.rgb.primary}, 0.2);
  }

  & .ant-slider-mark-text:not(.ant-slider-mark-text-active) {
    color: ${({ theme }) => theme.subText};
  }
`;
