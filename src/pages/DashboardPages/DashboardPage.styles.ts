import styled from 'styled-components';
import { Col } from 'antd';

export const RightSideCol = styled(Col)`
  padding: ${(props) => `${props.theme.desktopLayout.paddingVertical} ${props.theme.desktopLayout.paddingHorizontal}`};
  position: sticky;
  top: 0;
  display: flex;
  flex-direction: column;
  height: calc(100vh - ${(props) => props.theme.desktopLayout.headerHeight});
  background-color: ${(props) => props.theme.colors.sider.background};
`;

export const LeftSideCol = styled(Col)`
  @media only screen and ${(props) => props.theme.media.xl} {
    padding: ${(props) =>
      `${props.theme.desktopLayout.paddingVertical} ${props.theme.desktopLayout.paddingHorizontal}`};
    height: calc(100vh - ${(props) => props.theme.desktopLayout.headerHeight});
    overflow: auto;
  }
`;

export const Space = styled.div`
  margin: 1rem 0;
`;

export const ScrollWrapper = styled.div`
  overflow-y: auto;
  overflow-x: hidden;

  .ant-card-body {
    overflow-y: auto;
    overflow-x: hidden;
  }
`;
