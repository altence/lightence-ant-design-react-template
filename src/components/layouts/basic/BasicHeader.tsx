import styled from 'styled-components';
import { Layout } from 'antd';

const { Header } = Layout;

export default styled(Header)`
  padding: 1rem;
  background: transparent;

  @media only screen and ${(props) => props.theme.media.md} {
    padding: ${(props) =>
      `${props.theme.desktopLayout.paddingVertical} ${props.theme.desktopLayout.paddingHorizontal}`};

    line-height: ${(props) => props.theme.desktopLayout.headerLineHeight};

    margin-bottom: ${(props) =>
      `calc(${props.theme.desktopLayout.contentOffset} - ${props.theme.desktopLayout.headerHeight})`};
  }
`;
