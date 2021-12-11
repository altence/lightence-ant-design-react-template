import { SliderSingleProps } from 'antd';
import * as S from './Slider.styles';

export const Slider: React.FC<SliderSingleProps> = (props) => {
  return <S.Slider {...props} />;
};
