import styled from 'styled-components';
import { Layout } from 'antd';

const { Content } = Layout;

export default styled(Content)`
  padding: ${(props) => props.theme.desktopLayout.paddingVertical}
    ${(props) => props.theme.desktopLayout.paddingHorizontal};
`;
