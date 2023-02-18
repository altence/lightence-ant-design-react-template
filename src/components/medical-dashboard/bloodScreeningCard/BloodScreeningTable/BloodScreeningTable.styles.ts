import styled from 'styled-components';
import { BaseTable as CommonTable } from '@app/components/common/BaseTable/BaseTable';
import { FONT_SIZE, FONT_WEIGHT } from '@app/styles/themes/constants';

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
    font-size: ${FONT_SIZE.md};
    font-weight: ${FONT_WEIGHT.semibold};

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
  font-weight: ${(props) => (props.$isActive ? `${FONT_WEIGHT.semibold}` : `${FONT_WEIGHT.regular}`)};
`;

export const Flag = styled(Text)<{ $isNorm: boolean }>`
  color: ${(props) => (props.$isNorm ? 'var(--success-color)' : 'var(--error-color)')};
`;
