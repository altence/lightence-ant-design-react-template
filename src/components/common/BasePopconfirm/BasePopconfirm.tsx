import type { PopconfirmProps } from 'antd';
import * as S from './BasePopconfirm.styles';

export type BasePopconfirmProps = PopconfirmProps;

export const BasePopconfirm: React.FC<BasePopconfirmProps> = (props) => {
  return <S.Popconfirm {...props} />;
};
