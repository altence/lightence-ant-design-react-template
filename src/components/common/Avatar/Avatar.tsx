import { AvatarProps, Avatar as AntdAvatar } from 'antd';
import * as S from './Avatar.styles';

export const { Group } = AntdAvatar;

export const Avatar: React.FC<AvatarProps> = (props) => {
  return <S.Avatar {...props} />;
};
