import styled from 'styled-components';
import { Layout } from 'antd';

const { Content } = Layout;

export default styled(Content)`
  transform: translateY(-50px);

  padding: ${(props) => `${props.theme.desktopLayout.paddingVertical} ${props.theme.desktopLayout.paddingHorizontal}`};
`;
