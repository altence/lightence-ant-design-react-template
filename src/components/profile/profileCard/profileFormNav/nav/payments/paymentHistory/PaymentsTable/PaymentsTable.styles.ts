import { BaseTable } from '@app/components/common/BaseTable/BaseTable';
import styled from 'styled-components';

export const PaymentHistoryTable = styled(BaseTable)`
  .ant-table-thead > tr {
    th,
    td {
      border-block: 1px solid rgba(${({ theme }) => theme.rgb.primary}, 0.3);
    }

    th {
      color: ${({ theme }) => theme.primary};
      text-align: center;

      &::before {
        display: none;
      }
    }
  }

  .ant-table-tbody > tr > td {
    border-bottom: 1px solid rgba(${({ theme }) => theme.rgb.primary}, 0.3);
    font-weight: ${({ theme }) => theme.fontWeights.semibold};
    font-size: ${({ theme }) => theme.fontSizes.md};
  }
`;

export const RecipientWrapper = styled.div`
  display: flex;
  align-items: center;
  text-align: left;

  & > span:first-of-type {
    margin-right: 0.5rem;
  }
`;
