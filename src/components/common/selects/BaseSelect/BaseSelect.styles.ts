import styled from 'styled-components';
import { Select as AntSelect } from 'antd';
import { Dimension } from 'interfaces/interfaces';
import { normalizeProp } from '@app/utils/utils';

export interface InternalSelectProps {
  $width?: Dimension;
  $shadow?: boolean;
}

export const Select = styled(AntSelect)<InternalSelectProps>`
  width: ${({ $width }) => $width && normalizeProp($width)};
  box-shadow: ${(props) => props.$shadow && props.theme.boxShadow};

  .ant-select-item-option-selected:not(.ant-select-item-option-disabled) {
    font-weight: ${({ theme }) => theme.fontWeights.medium};
  }

  &.ant-select-borderless {
    background: ${({ theme }) => theme.secondaryBackground} !important;
    border-radius: ${({ theme }) => theme.borderRadius};
  }

  .ant-select-selection-placeholder {
    font-size: ${({ theme }) => theme.fontSizes.xs};
  }

  .ant-select-item {
    min-height: unset;
    padding-block: 5px;
  }

  &.ant-select-multiple {
    &.ant-select-disabled .ant-select-selection-item {
      color: #bfbfbf;
      border: 1px solid ${({ theme }) => theme.borderBase};
    }

    .ant-select-selection-item {
      border: 1px solid #f0f0f0;
      margin-inline-end: 11px;
    }

    .ant-select-selector {
      padding-inline-start: 11px;
    }
  }
`;
