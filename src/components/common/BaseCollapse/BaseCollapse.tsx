import { CollapseProps, Collapse as AntdCollapse } from 'antd';

export type BaseCollapseProps = CollapseProps;

interface BaseCollapseInterface extends React.FC<BaseCollapseProps> {
  Panel: typeof AntdCollapse.Panel;
}

export const BaseCollapse: BaseCollapseInterface = (props) => {
  return <AntdCollapse {...props} />;
};

BaseCollapse.Panel = AntdCollapse.Panel;
