import styled from 'styled-components';
import { Layout } from 'antd';

const { Header } = Layout;

export default styled(Header)`
  background: transparent;

  // TODO Check if we need this padding, we can use antd default padding
  padding: ${(props) => `${props.theme.desktopLayout.paddingVertical} ${props.theme.desktopLayout.paddingHorizontal}`};

  // TODO Check why we need this?
  line-height: ${(props) => props.theme.desktopLayout.headerLineHeight};

  margin-bottom: ${(props) =>
    `calc(${props.theme.desktopLayout.contentOffset} - ${props.theme.desktopLayout.headerHeight})`};
`;
