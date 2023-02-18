import styled from 'styled-components';
import { Tabs as AntdTabs } from 'antd';

export const Tabs = styled(AntdTabs)`
  .ant-tabs-tab.ant-tabs-tab-disabled {
    color: var(--disabled-color);
  }
`;
