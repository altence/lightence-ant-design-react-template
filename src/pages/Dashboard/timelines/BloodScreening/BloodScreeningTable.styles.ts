import styled from 'styled-components';
import { Table as AntTable, Typography } from 'antd';

interface TextProps {
  isActive: boolean;
}

interface PercentageProps extends TextProps {
  isDowngrade: boolean;
}

export const Table = styled(AntTable)`
  & .ant-table-thead > tr > th {
    font-weight: 400;
    font-size: 0.75rem;

    &::before {
      display: none;
    }
  }

  & .ant-table-tbody > tr > td {
    border: 0;
    cursor: pointer;
  }
`;

export const Performance = styled.div`
  display: flex;
  justify-content: space-between;
  width: 5rem;
`;

export const Text = styled(Typography.Text)<TextProps>`
  color: ${(props) => (props.isActive && props.theme.colors.basicDark) || props.theme.colors.basic};
`;

export const Percentage = styled(Typography.Text)<PercentageProps>`
  width: 3rem;
  color: ${(props) =>
    (props.isActive && props.isDowngrade && props.theme.colors.fail) ||
    (props.isActive && props.theme.colors.success) ||
    props.theme.colors.basic};
`;
