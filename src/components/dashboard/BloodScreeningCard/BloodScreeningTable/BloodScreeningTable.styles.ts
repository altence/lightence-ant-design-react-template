import styled from 'styled-components';
import { Table as CommonTable } from 'components/common/Table/Table';

interface TextProps {
  $isActive?: boolean;
}

export const Table = styled(CommonTable)`
  thead .ant-table-cell {
    border-top: none;
    border-bottom: ${(props) => `1px solid ${props.theme.colors.main.secondaryBackground}`};
  }

  .ant-table-thead > tr > th {
    background: transparent;
    color: ${(props) => props.theme.colors.text.main};
    font-size: ${(props) => props.theme.commonFontSizes.md};
    font-weight: ${(props) => props.theme.commonFontWeight.semibold};

    &::before {
      display: none;
    }
  }

  .ant-table-tbody > tr > td {
    border: 0;
    cursor: pointer;
  }

  @media only screen and ${(props) => props.theme.media.md} {
    .ant-table-container {
      // 100vh - headerHeight - 2*paddingVertical - height of chart - height of table header
      height: calc(
        100vh - ${(props) => props.theme.desktopLayout.headerHeight} -
          ${(props) => props.theme.desktopLayout.paddingVertical}*2 - 200px - 45px
      );
    }
  }
`;

export const Text = styled.span<TextProps>`
  color: ${(props) => (props.$isActive ? props.theme.colors.text.main : props.theme.colors.text.light)};
  font-weight: ${(props) =>
    props.$isActive ? props.theme.commonFontWeight.semibold : props.theme.commonFontWeight.regular};
`;

export const Flag = styled(Text)<{ $isNorm: boolean }>`
  color: ${(props) => (props.$isNorm ? props.theme.colors.main.success : props.theme.colors.main.error)};
`;
