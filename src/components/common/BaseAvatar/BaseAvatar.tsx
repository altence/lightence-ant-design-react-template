import { Avatar, AvatarProps } from 'antd';

export type BaseAvatarProps = AvatarProps;

interface BaseAvatarInterface extends React.FC<BaseAvatarProps> {
  Group: typeof Avatar.Group;
}

export const BaseAvatar: BaseAvatarInterface = (props) => {
  return <Avatar {...props} />;
};

BaseAvatar.Group = Avatar.Group;
