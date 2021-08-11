import styled from 'styled-components';
import { Table as AntTable } from 'antd';

interface TextProps {
  isActive?: boolean;
}

interface PercentageProps extends TextProps {
  isDowngrade: boolean;
}

export const Table = styled(AntTable)`
  padding: 0 1rem;

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

export const Text = styled.span<TextProps>`
  color: ${(props) => (props.isActive && props.theme.colors.basicDark) || props.theme.colors.basic};
`;

export const Performance = styled.div`
  display: flex;
  justify-content: space-between;
  width: 5rem;
`;

export const Percentage = styled.span<PercentageProps>`
  display: flex;
  align-items: center;
  width: 2.6rem;

  color: ${(props) =>
    (props.isActive && props.isDowngrade && props.theme.colors.error) ||
    (props.isActive && props.theme.colors.success) ||
    props.theme.colors.basic};

  & ${Text} {
    margin-left: 0.2rem;

    color: ${(props) =>
      (props.isActive && props.isDowngrade && props.theme.colors.error) ||
      (props.isActive && props.theme.colors.success) ||
      props.theme.colors.basic};
  }
`;
