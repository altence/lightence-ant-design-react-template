import styled from 'styled-components';
import { Table as AntTable } from 'antd';
import { media } from '../../../../styles/theme';

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
`;

export const Text = styled.span<TextProps>`
  color: ${(props) => (props.isActive && props.theme.colors.basicDark) || props.theme.colors.basic};
`;

export const PercentageWrapper = styled.div`
  display: flex;
  width: 3rem;
  justify-content: space-between;

  @media only screen and ${media.xxl} {
    width: 4rem;
  }
`;

export const Percentage = styled.div<PercentageProps>`
  display: inline-flex;
  width: 2rem;
  align-items: center;
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
