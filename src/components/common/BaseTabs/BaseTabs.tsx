import { TabsProps } from 'antd';
import * as S from './BaseTabs.styles';

export type BaseTabsProps = TabsProps;

export const BaseTabs: React.FC<BaseTabsProps> = ({ children, ...props }) => {
  return <S.Tabs {...props}>{children}</S.Tabs>;
};
