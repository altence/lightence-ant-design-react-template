import { CollapseProps, Collapse as AntCollapse } from 'antd';

export type BaseCollapseProps = CollapseProps;

interface BaseCollapseInterface extends React.FC<BaseCollapseProps> {
  Panel: typeof AntCollapse.Panel;
}

export const BaseCollapse: BaseCollapseInterface = (props) => {
  return <AntCollapse {...props} />;
};

BaseCollapse.Panel = AntCollapse.Panel;
