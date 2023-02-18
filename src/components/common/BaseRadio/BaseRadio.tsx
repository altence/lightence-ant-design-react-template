import { Radio, RadioProps } from 'antd';
import * as S from './BaseRadio.styles';

export type BaseRadioProps = RadioProps;

interface BaseRadioInterface extends React.FC<BaseRadioProps> {
  Group: typeof Radio.Group;
  Button: typeof Radio.Button;
}

export const BaseRadio: BaseRadioInterface = (props) => {
  return <S.Radio {...props} />;
};

BaseRadio.Group = Radio.Group;
BaseRadio.Button = S.RadioButton;
