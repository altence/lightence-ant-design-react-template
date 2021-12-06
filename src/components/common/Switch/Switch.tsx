import { Switch as AntdSwitch, SwitchProps } from 'antd';

export const Switch: React.FC<SwitchProps> = (props) => {
  return <AntdSwitch {...props} />;
};
