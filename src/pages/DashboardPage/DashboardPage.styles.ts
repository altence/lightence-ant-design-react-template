import styled from 'styled-components';
import { Col } from 'antd';
import { media } from '@app/styles/themes/light/lightTheme';

export const RightSideCol = styled(Col)`
  padding: var(--desktop-padding-vertical) var(--desktop-padding-horizontal);
  position: sticky;
  top: 0;
  display: flex;
  flex-direction: column;
  height: calc(100vh - var(--desktop-header-height));
  background-color: var(--background-color);

  #patient-timeline {
    overflow-y: auto;
  }
`;

export const LeftSideCol = styled(Col)`
  @media only screen and ${media.xl} {
    padding: var(--desktop-padding-vertical) var(--desktop-padding-horizontal);
    height: calc(100vh - var(--desktop-header-height));
    overflow: auto;
  }
`;

export const Space = styled.div`
  margin: 1rem 0;
`;
