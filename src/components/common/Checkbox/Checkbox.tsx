import { Checkbox as AntdCheckbox, CheckboxProps } from 'antd';
import * as S from './Checkbox.styles';
export const { Group: CheckboxGroup } = AntdCheckbox;

export const Checkbox: React.FC<CheckboxProps> = (props) => {
  return <S.Checkbox {...props} />;
};
