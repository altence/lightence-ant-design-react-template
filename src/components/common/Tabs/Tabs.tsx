import { Tabs as AntdTabs, TabsProps } from 'antd';
import * as S from './Tabs.styles';

export const { TabPane } = AntdTabs;

export const Tabs: React.FC<TabsProps> = ({ children, ...props }) => {
  return <S.Tabs {...props}>{children}</S.Tabs>;
};
