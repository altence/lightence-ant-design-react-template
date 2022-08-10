import styled from 'styled-components';
import { Table } from 'antd';

export const PaymentHistoryTable = styled(Table)`
  .ant-table-thead > tr > th {
    border-top: 1px solid rgba(var(--primary-rgb-color), 0.3);

    border-bottom: 1px solid rgba(var(--primary-rgb-color), 0.3);

    color: var(--primary-color);

    text-align: center;

    &::before {
      display: none;
    }
  }

  .ant-table-tbody > tr > td {
    border-bottom: 1px solid rgba(var(--primary--rgb-color), 0.3);

    font-weight: 600;
    font-size: 1rem;
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
