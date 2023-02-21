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

  font-weight: ${FONT_WEIGHT.medium};

  box-shadow: ${(props) => props.$shadow && 'var(--box-shadow)'};

  &.ant-select-borderless {
    background: var(--secondary-background-color);

    border-radius: ${BORDER_RADIUS};
  }

  .ant-select-selection-placeholder {
    font-size: ${FONT_SIZE.xs};

    color: var(--text-main-color);
  }

  .ant-select-arrow {
    color: var(--text-main-color);
  }

  &.ant-select-multiple.ant-select-sm .ant-select-selection-item {
    height: 0.875rem;
    line-height: ${FONT_SIZE.xs};
    font-size: ${FONT_SIZE.xs};
    margin-top: 0.1875rem;
    margin-bottom: 0.1875rem;
  }

  &.ant-select-disabled.ant-select:not(.ant-select-customize-input) .ant-select-selector {
    color: var(--disabled-color);
  }

  .ant-select-clear {
    color: var(--disabled-color);
  }
  .ant-select-selection-item-remove {
    color: var(--icon-color);
    &:hover {
      color: var(--icon-hover-color);
    }
  }
  .ant-select-item-option-disabled {
    color: var(--disabled-color);
  }
`;
