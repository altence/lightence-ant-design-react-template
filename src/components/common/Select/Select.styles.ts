import styled from 'styled-components';
import { Select as AntSelect } from 'antd';

export const Select = styled(AntSelect)`
  ${(props) => !props.bordered && `box-shadow: ${props.theme.boxShadow}`};

  .ant-select-selection-placeholder {
    font-size: ${(props) => props.theme.commonFontSizes.xs};

    color: ${(props) => props.theme.colors.text.main};
  }

  .ant-select-arrow {
    color: ${(props) => props.theme.colors.text.main};
  }
`;
