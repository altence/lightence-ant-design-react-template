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

  box-shadow: ${(props) => props.shadow && props.theme.boxShadow};

  .ant-select-selection-placeholder {
    font-size: ${(props) => props.theme.commonFontSizes.xs};

    color: ${(props) => props.theme.colors.text.main};
  }

  .ant-select-arrow {
    color: ${(props) => props.theme.colors.text.main};
  }
`;
