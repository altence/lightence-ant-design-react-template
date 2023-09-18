import type { MenuProps } from 'antd';
import * as S from './BaseMenu.styles';

export type BaseMenuProps = Omit<MenuProps, 'theme'>;

export const BaseMenu: React.FC<BaseMenuProps> = (props) => {
  return <S.Menu {...props} />;
};
