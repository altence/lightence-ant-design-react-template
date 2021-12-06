import { Radio as AntdRadio, RadioProps } from 'antd';

export const { Button: RadioButton, Group: RadioGroup } = AntdRadio;

export const Radio: React.FC<RadioProps> = (props) => {
  return <AntdRadio {...props} />;
};
