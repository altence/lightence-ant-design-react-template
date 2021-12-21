import styled from 'styled-components';
import { Layout } from 'antd';

const { Content } = Layout;

export default styled(Content)`
  overflow-y: auto;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    width: 0;
  }

  border-radius: ${(props) => props.theme.border.radius};

  margin: ${(props) => `${props.theme.mobileLayout.paddingVertical} ${props.theme.mobileLayout.paddingHorizontal}`};

  @media only screen and ${(props) => props.theme.media.md} {
    margin: ${(props) => `${props.theme.desktopLayout.paddingVertical} ${props.theme.desktopLayout.paddingHorizontal}`};
  }
`;
