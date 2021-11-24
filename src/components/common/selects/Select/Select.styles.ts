import styled from 'styled-components';
import { Select as AntSelect } from 'antd';
import { Width } from 'interfaces/interfaces';

export interface SelectProps {
  width?: Width;
  shadow?: boolean;
}

export const Select = styled(AntSelect).withConfig({
  shouldForwardProp: (prop) => !['shadow', 'width'].includes(prop),
})<SelectProps>`
  width: ${(props) => (typeof props.width === 'number' ? `${props.width}px` : props.width)};

  font-weight: ${(props) => props.theme.commonFontWeight.medium};

  box-shadow: ${(props) => props.shadow && props.theme.boxShadow};

  .ant-select-selection-placeholder {
    font-size: ${(props) => props.theme.commonFontSizes.xs};

    color: ${(props) => props.theme.colors.text.main};
  }

  .ant-select-arrow {
    color: ${(props) => props.theme.colors.text.main};
  }
`;
