import styled from 'styled-components';
import { Slider as AntdSlider } from 'antd';

export const Slider = styled(AntdSlider)`
  & .ant-slider-mark-text:not(.ant-slider-mark-text-active) {
    color: var(--subtext-color);
  }
`;
