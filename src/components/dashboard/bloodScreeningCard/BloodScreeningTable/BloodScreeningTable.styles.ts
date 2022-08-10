import styled from 'styled-components';
import { Table as CommonTable } from 'components/common/Table/Table';

interface TextProps {
  $isActive?: boolean;
}

export const Table = styled(CommonTable)`
  thead .ant-table-cell {
    border-top: none;
    border-bottom: 1px solid var(--border-color);
  }

  .ant-table-thead > tr > th {
    background: transparent;
    color: var(--text-main-color);
    font-size: var(--font-size-md);
    font-weight: var(--font-weight-semibold);

    &::before {
      display: none;
    }
  }

  .ant-table-tbody > tr > td {
    border: 0;
    cursor: pointer;
  }
`;

export const Text = styled.span<TextProps>`
  color: var(--text-main-color);
  font-weight: ${(props) => (props.$isActive ? 'var(--font-weight-semibold)' : 'var(--font-weight-regular)')};
`;

export const Flag = styled(Text)<{ $isNorm: boolean }>`
  color: ${(props) => (props.$isNorm ? 'var(--success-color)' : 'var(--error-color)')};
`;
