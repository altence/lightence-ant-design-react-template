import styled from 'styled-components';
import { Input as AntInput } from 'antd';
import { FONT_WEIGHT, FONT_SIZE } from '@app/styles/themes/constants';

export const Input = styled(AntInput)`
  .ant-input-group-addon:first-child,
  .ant-input-group-addon:last-child {
    min-width: 5.5rem;
    color: var(--primary-color);
    font-weight: ${FONT_WEIGHT.semibold};
    font-size: ${FONT_SIZE.lg};
  }

  .ant-input-group-addon .ant-select {
    .ant-select-selection-item {
      min-width: 5.5rem;
      color: var(--primary-color);
      font-weight: ${FONT_WEIGHT.semibold};
      font-size: ${FONT_SIZE.lg};
    }
  }

  .ant-select-arrow {
    color: var(--disabled-color);
  }
`;
