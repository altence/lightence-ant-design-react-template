import styled from 'styled-components';
import { Tag as AntdTag } from 'antd';

export const Tag = styled(AntdTag)`
  padding: 0.375rem 0;
  min-width: 7.5rem;
  margin: 0 0.75rem 0 0;
  text-align: center;

  @media only screen and ${(props) => props.theme.media.md} {
    min-width: 6.5rem;
  }
`;
