import styled from 'styled-components';
import { Table as AntTable } from 'antd';
import theme from '../../../../styles/theme';

interface TextProps {
  isActive?: boolean;
}

interface PercentageProps extends TextProps {
  isDowngrade: boolean;
}

export const Table = styled(AntTable)`
  & .ant-table-thead > tr > th {
    font-weight: 400;

    &::before {
      display: none;
    }
  }

  & .ant-table-tbody > tr > td {
    border: 0;
    cursor: pointer;
  }

  @media only screen and ${theme.media.xl} {
    padding: 0 1rem;
  }
`;

export const Text = styled.span<TextProps>`
  color: ${(props) => (props.isActive && props.theme.colors.text.main) || props.theme.colors.text.light};
`;

export const PercentageWrapper = styled.div`
  display: flex;
  width: 3rem;
  justify-content: space-between;

  @media only screen and ${theme.media.xxl} {
    width: 4rem;
  }
`;

export const Percentage = styled.div<PercentageProps>`
  display: inline-flex;
  width: 2rem;
  align-items: center;
  color: ${(props) =>
    (props.isActive && props.isDowngrade && props.theme.colors.main.error) ||
    (props.isActive && props.theme.colors.main.success) ||
    props.theme.colors.text.light};

  & ${Text} {
    margin-left: 0.2rem;

    color: ${(props) =>
      (props.isActive && props.isDowngrade && props.theme.colors.main.error) ||
      (props.isActive && props.theme.colors.main.success) ||
      props.theme.colors.text.light};
  }
`;
