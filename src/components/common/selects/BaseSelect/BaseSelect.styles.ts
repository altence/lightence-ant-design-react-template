import styled from 'styled-components';
import { Select as AntSelect } from 'antd';
import { Dimension } from 'interfaces/interfaces';
import { normalizeProp } from '@app/utils/utils';
import { FONT_WEIGHT, BORDER_RADIUS, FONT_SIZE } from '@app/styles/themes/constants';

export interface InternalSelectProps {
  $width?: Dimension;
  $shadow?: boolean;
}

export const Select = styled(AntSelect)<InternalSelectProps>`
  width: ${(props) => props.$width && normalizeProp(props.$width)};

  .ant-select-item-option-selected:not(.ant-select-item-option-disabled) {
    font-weight: ${FONT_WEIGHT.medium};
  }

  box-shadow: ${(props) => props.$shadow && 'var(--box-shadow)'};

  &.ant-select-borderless {
    background: var(--secondary-background-color) !important;
    border-radius: ${BORDER_RADIUS};
  }

  .ant-select-selection-placeholder {
    font-size: ${FONT_SIZE.xs};
  }

  .ant-select-item {
    min-height: unset;
    padding-block: 5px;
  }

  &.ant-select-multiple {
    &.ant-select-disabled .ant-select-selection-item {
      color: #bfbfbf;
      border: 1px solid var(--border-base-color);
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
