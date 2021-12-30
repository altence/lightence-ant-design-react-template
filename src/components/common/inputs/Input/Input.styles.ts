import styled from 'styled-components';
import { Input as AntInput } from 'antd';

export const Input = styled(AntInput)`
  .ant-input-group-addon:first-child,
  .ant-input-group-addon:last-child {
    min-width: 5.5rem;
    color: ${(props) => `${props.theme.colors.main.primary}`};
    font-weight: ${(props) => `${props.theme.commonFontWeight.semibold}`};
    font-size: ${(props) => `${props.theme.commonFontSizes.lg}`};
  }

  .ant-input-group-addon .ant-select {
    .ant-select-selection-item {
      min-width: 5.5rem;
      color: ${(props) => `${props.theme.colors.main.primary}`};
      font-weight: ${(props) => `${props.theme.commonFontWeight.semibold}`};
      font-size: ${(props) => `${props.theme.commonFontSizes.lg}`};
    }
  }
`;
