import styled from 'styled-components';
import { Slider as AntSlider } from 'antd';

export const Slider = styled(AntSlider)`
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
