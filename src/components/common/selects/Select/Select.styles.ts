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

  font-weight: ${(props) => props.theme.commonFontWeight.medium};

  box-shadow: ${(props) => props.shadow && props.theme.boxShadow.main};

  &.ant-select-borderless {
    background: ${(props) => props.theme.colors.main.secondaryBackground};

    border-radius: ${(props) => props.theme.border.radius};
  }

  .ant-select-selection-placeholder {
    font-size: ${(props) => props.theme.commonFontSizes.xs};

    color: ${(props) => props.theme.colors.text.main};
  }

  .ant-select-arrow {
    color: ${(props) => props.theme.colors.text.main};
  }

  &.ant-select-multiple.ant-select-sm .ant-select-selection-item {
    height: 0.875rem;
    line-height: ${(props) => props.theme.commonFontSizes.xs};
    font-size: ${(props) => props.theme.commonFontSizes.xs};
    margin-top: 0.1875rem;
    margin-bottom: 0.1875rem;
  }
`;
