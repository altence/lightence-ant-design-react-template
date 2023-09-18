import styled from 'styled-components';
import { BaseTable } from '@app/components/common/BaseTable/BaseTable';

interface TextProps {
  $isActive?: boolean;
}

export const Table = styled(BaseTable)`
  thead .ant-table-cell {
    border-top: none;
    border-bottom: 1px solid ${({ theme }) => theme.border};
  }

  .ant-table-thead > tr > th {
    background: transparent;
    color: ${({ theme }) => theme.textMain};
    font-size: ${({ theme }) => theme.fontSizes.md};
    font-weight: ${({ theme }) => theme.fontWeights.semibold};

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
  color: ${({ theme }) => theme.textMain};
  font-weight: ${({ $isActive, theme }) => ($isActive ? theme.fontWeights.semibold : theme.fontWeights.regular)};
`;

export const Flag = styled(Text)<{ $isNorm: boolean }>`
  color: ${({ $isNorm, theme }) => ($isNorm ? theme.success : theme.error)};
`;
