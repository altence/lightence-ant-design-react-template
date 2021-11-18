import { Select } from 'components/common/Select/Select';
import styled from 'styled-components';

export const ScreeningsSelect = styled(Select)`
  width: 100%;

  font-weight: ${(props) => props.theme.commonFontWeight.medium};
`;
