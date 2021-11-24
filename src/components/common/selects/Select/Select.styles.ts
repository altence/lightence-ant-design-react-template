import styled from 'styled-components';
import { Select as AntSelect } from 'antd';
import { Width } from 'interfaces/interfaces';

interface SelectProps {
  width?: Width;
}

export const Select = styled(AntSelect)<SelectProps>`
  width: ${(props) => (typeof props.width === 'number' ? `${props.width}px` : props.width)};

  font-weight: ${(props) => props.theme.commonFontWeight.medium};

  ${(props) => !props.bordered && `box-shadow: ${props.theme.boxShadow}`};

  .ant-select-selection-placeholder {
    font-size: ${(props) => props.theme.commonFontSizes.xs};

    color: ${(props) => props.theme.colors.text.main};
  }

  .ant-select-arrow {
    color: ${(props) => props.theme.colors.text.main};
  }
`;
