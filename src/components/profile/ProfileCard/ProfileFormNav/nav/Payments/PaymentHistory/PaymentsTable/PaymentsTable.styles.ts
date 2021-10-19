import styled from 'styled-components';
import { Table } from 'antd';
import { hexToRGB } from 'helpers/hexToRGB';

export const PaymentHistoryTable = styled(Table)`
  .ant-table-thead > tr > th {
    border-top: ${(props) => `1px solid ${hexToRGB(props.theme.colors.main.primary, 0.3)}`};

    border-bottom: ${(props) => `1px solid ${hexToRGB(props.theme.colors.main.primary, 0.3)}`};

    color: ${(props) => props.theme.colors.main.primary};

    text-align: center;

    &::before {
      display: none;
    }
  }

  .ant-table-tbody > tr > td {
    border-bottom: ${(props) => `1px solid ${hexToRGB(props.theme.colors.main.primary, 0.3)}`};

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
