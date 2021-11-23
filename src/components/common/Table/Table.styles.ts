import styled from 'styled-components';
import { Table as AntdTable } from 'antd';

export const Table = styled(AntdTable)`
  & thead .ant-table-cell {
    color: ${(props) => props.theme.colors.main.primary};
    font-size: ${(props) => props.theme.commonFontSizes.xs};
    line-height: 1.25rem;
  }

  & .ant-table-tbody > tr > td {
    border-bottom: 1px solid rgba(1, 80, 154, 0.3);
  }

  & tbody .ant-table-cell {
    color: ${(props) => props.theme.colors.text.main};
    font-size: ${(props) => props.theme.commonFontSizes.xs};
    line-height: 1.25rem;
  }

  &
    .ant-table-thead
    > tr
    > th:not(:last-child):not(.ant-table-selection-column):not(.ant-table-row-expand-icon-cell):not([colspan])::before {
    background: rgba(1, 80, 154, 0.3);
  }

  & .ant-pagination-prev,
  .ant-pagination-next,
  .ant-pagination-jump-prev,
  .ant-pagination-jump-next,
  .ant-pagination-item {
    min-width: 2.0625rem;
    height: 2.0625rem;
    line-height: 2.0625rem;
    border-radius: 0;
    font-size: ${(props) => props.theme.commonFontSizes.xs};
  }

  & .ant-pagination-prev .ant-pagination-item-link,
  .ant-pagination-next .ant-pagination-item-link {
    border-radius: 0;
  }

  & .ant-checkbox-inner {
    border-radius: 0.1875rem;
    height: 1.25rem;
    width: 1.25rem;
  }
`;
