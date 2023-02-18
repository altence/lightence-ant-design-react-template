import { SliderSingleProps } from 'antd';
import * as S from './BaseSlider.styles';

export type BaseSliderProps = SliderSingleProps;

export const BaseSlider: React.FC<SliderSingleProps> = (props) => {
  return <S.Slider {...props} />;
};
