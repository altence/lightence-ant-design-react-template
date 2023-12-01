import styled from 'styled-components';
import { AutoComplete as BaseAutoComplete } from 'antd';

export const AutoComplete = styled(BaseAutoComplete)`
  .ant-select-selection-search {
    input {
      font-size: ${({ theme }) => theme.fontSizes.md};
    }
  }
`;
