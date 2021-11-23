import styled from 'styled-components';
import { Tag as AntdTag } from 'antd';

export const Tag = styled(AntdTag)`
  padding: 0.3125rem 0.4375rem;
  border: none;
  margin-right: 0.3125rem;
  line-height: 1.25rem;
  font-size: ${(props) => props.theme.commonFontSizes.xs};
`;

export const Delete = styled.a`
  color: ${(props) => props.theme.colors.text.main};
  font-size: ${(props) => props.theme.commonFontSizes.xs};
`;
