import { Slider as AntdSlider, SliderSingleProps } from 'antd';

export const Slider: React.FC<SliderSingleProps> = (props) => {
  return <AntdSlider {...props} />;
};
