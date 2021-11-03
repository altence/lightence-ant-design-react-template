import { Button } from 'antd';
import { hexToRGB } from 'utils/utils';
import styled from 'styled-components';

export const Btn = styled(Button)`
  width: 100%;
`;

export const TagsBtn = styled(Btn)`
  color: ${(props) => hexToRGB(props.theme.colors.text.main, 0.3)};
`;
