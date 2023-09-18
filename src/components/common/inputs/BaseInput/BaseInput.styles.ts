import styled from 'styled-components';
import { Input as AntInput } from 'antd';

export const Input = styled(AntInput)`
  .ant-select:not(.ant-select-disabled):not(.ant-select-customize-input):not(.ant-pagination-size-changer):hover
    .ant-select-selector {
    border-color: transparent;
  }

  .ant-input-group-addon:first-child,
  .ant-input-group-addon:last-child,
  .ant-input-group-addon .ant-select .ant-select-selection-item {
    min-width: 5.5rem;
    color: ${({ theme }) => theme.primary};
    font-weight: ${({ theme }) => theme.fontWeights.semibold};
    font-size: ${({ theme }) => theme.fontSizes.lg};
  }

  .ant-select-arrow {
    color: ${({ theme }) => theme.disabled};
  }
`;
