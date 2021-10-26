import styled from 'styled-components';
import { Layout } from 'antd';

const { Content } = Layout;

export default styled(Content)`
  padding: 0.75rem 1rem;

  @media only screen and ${(props) => props.theme.media.md} {
    padding: 1.25rem 1.5rem;
  }
`;
