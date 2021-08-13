import styled from 'styled-components';
import { Table as AntTable } from 'antd';

interface TextProps {
  isActive?: boolean;
}

interface PercentageProps extends TextProps {
  isDowngrade: boolean;
}

export const Table = styled(AntTable)`
  padding: 0 1rem 0.625rem 1rem;

  & .ant-table-thead > tr > th {
    font-weight: 400;
    /* text-align: center; */

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

export const PercentageWrapper = styled.div`
  display: flex;
  width: 3rem;
  justify-content: space-between;
`;

export const Percentage = styled.div<PercentageProps>`
  display: inline-flex;
  width: 2rem;
  justify-content: space-between;
  align-items: center;
  color: ${(props) =>
    (props.isActive && props.isDowngrade && props.theme.colors.error) ||
    (props.isActive && props.theme.colors.success) ||
    props.theme.colors.basic};

  & ${Text} {
    color: ${(props) =>
      (props.isActive && props.isDowngrade && props.theme.colors.error) ||
      (props.isActive && props.theme.colors.success) ||
      props.theme.colors.basic};
  }
`;
