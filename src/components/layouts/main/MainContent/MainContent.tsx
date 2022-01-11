import styled from 'styled-components';
import { Layout } from 'antd';

const { Content } = Layout;

interface Content {
  $twoColumnsLayout: boolean;
}

export default styled(Content)<Content>`
  padding: ${(props) => `${props.theme.mobileLayout.paddingVertical} ${props.theme.mobileLayout.paddingHorizontal}`};
  overflow: ${(props) => (props?.$twoColumnsLayout ? 'hidden' : 'auto')};

  @media only screen and ${(props) => props.theme.media.md} {
    padding: ${(props) =>
      `${props.theme.desktopLayout.paddingVertical} ${props.theme.desktopLayout.paddingHorizontal}`};
  }
`;
