import styled from 'styled-components';
import { Col } from 'antd';

export const RightSideCol = styled(Col)`
  padding: ${(props) => `${props.theme.desktopLayout.paddingVertical} ${props.theme.desktopLayout.paddingHorizontal}`};
  position: sticky;
  top: 0;
  display: flex;
  flex-direction: column;
  height: calc(100vh - ${(props) => props.theme.desktopLayout.headerHeight});
  background-color: ${(props) => props.theme.colors.main.mainBackground};

  #patient-timeline {
    overflow-y: auto;
  }
`;

export const LeftSideCol = styled(Col)`
  @media only screen and ${(props) => props.theme.media.xl} {
    padding: ${(props) =>
      `${props.theme.desktopLayout.paddingVertical} ${props.theme.desktopLayout.paddingHorizontal}`};
  }
`;

export const Space = styled.div`
  margin: 1rem 0;
`;
