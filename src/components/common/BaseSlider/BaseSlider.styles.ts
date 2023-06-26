import styled from 'styled-components';
import { Slider as AntdSlider } from 'antd';

export const Slider = styled(AntdSlider)`
  &.ant-slider.ant-slider-disabled .ant-slider-rail {
    background-color: var(--background-base-color) !important;
  }

  &.ant-slider .ant-slider-handle:focus::after {
    outline: 6px solid var(--ant-primary-color-outline);
  }

  & .ant-slider-mark-text:not(.ant-slider-mark-text-active) {
    color: var(--subtext-color);
  }
`;
