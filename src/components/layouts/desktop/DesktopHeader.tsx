import styled from 'styled-components';
import { Layout } from 'antd';

const { Header } = Layout;

export default styled(Header)`
  background: transparent;
  padding: ${(props) => props.theme.desktopLayout.paddingVertical}
    ${(props) => props.theme.desktopLayout.paddingHorizontal};
  height: ${(props) => props.theme.desktopLayout.headerHeight};
  line-height: ${(props) => props.theme.desktopLayout.headerLineHeight};
  margin-bottom: ${(props) =>
    `calc(${props.theme.desktopLayout.contentOffset} - ${props.theme.desktopLayout.headerHeight})`};
`;
