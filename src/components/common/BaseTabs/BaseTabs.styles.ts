import styled from 'styled-components';
import { Tabs as AntdTabs } from 'antd';

export const Tabs = styled(AntdTabs)`
  .ant-tabs-tab.ant-tabs-tab-disabled {
    color: var(--disabled-color);
  }

  &.ant-tabs .ant-tabs-tab:not(.ant-tabs-tab-active) {
    .ant-tabs-tab-btn,
    .ant-tabs-tab-remove {
      &:focus-visible {
        color: var(--ant-primary-7);
      }
    }
  }
`;
