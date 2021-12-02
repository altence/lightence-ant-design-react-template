import styled from 'styled-components';
import { Table as CommonTable } from 'components/common/Table/Table';
import theme from '../../../../styles/theme';

interface TextProps {
  isActive?: boolean;
}

interface PercentageProps extends TextProps {
  isDowngrade: boolean;
}

export const Table = styled(CommonTable)`
  & thead .ant-table-cell {
    border-top: none;
    border-bottom: ${(props) => `1px solid ${props.theme.colors.main.secondaryBackground}`};
  }
  & .ant-table-thead > tr > th {
    background: transparent;
    color: ${(props) => props.theme.colors.text.main};
    font-size: ${(props) => props.theme.commonFontSizes.md};
    font-weight: ${(props) => props.theme.commonFontWeight.semibold};

    &::before {
      display: none;
    }
  }

  & .ant-table-tbody > tr > td {
    border: 0;
    cursor: pointer;
  }

  @media only screen and ${theme.media.xs} {
    padding: 0 0.5rem;
  }

  @media only screen and ${theme.media.md} {
    padding: 0 1rem;
  }
`;

export const Text = styled.span<TextProps>`
  color: ${(props) => (props.isActive ? props.theme.colors.text.main : props.theme.colors.text.light)};
  font-weight: ${(props) =>
    props.isActive ? props.theme.commonFontWeight.semibold : props.theme.commonFontWeight.regular};
`;

export const PercentageWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const Percentage = styled.div<PercentageProps>`
  display: flex;
  min-width: 3.2rem;
  align-items: center;
  justify-content: flex-start;
  margin-left: 1rem;
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
