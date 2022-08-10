import styled from 'styled-components';
import { Select as AntSelect } from 'antd';
import { Dimension } from 'interfaces/interfaces';
import { normalizeProp } from 'utils/utils';

export interface SelectProps {
  width?: Dimension;
  shadow?: boolean;
}

export const Select = styled(AntSelect).withConfig({
  shouldForwardProp: (prop) => !['shadow', 'width'].includes(prop),
})<SelectProps>`
  width: ${(props) => props.width && normalizeProp(props.width)};

  font-weight: var(--font-weight-medium);

  box-shadow: ${(props) => props.shadow && 'var(--box-shadow)'};

  &.ant-select-borderless {
    background: var(--secondary-background-color);

    border-radius: var(--border-radius);
  }

  .ant-select-selection-placeholder {
    font-size: var(--font-size-xs);

    color: var(--text-main-color);
  }

  .ant-select-arrow {
    color: var(--text-main-color);
  }

  &.ant-select-multiple.ant-select-sm .ant-select-selection-item {
    height: 0.875rem;
    line-height: var(--font-size-xs);
    font-size: var(--font-size-xs);
    margin-top: 0.1875rem;
    margin-bottom: 0.1875rem;
  }
`;
