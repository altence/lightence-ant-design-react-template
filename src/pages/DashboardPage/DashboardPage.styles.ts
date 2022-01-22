import styled from 'styled-components';
import { Col } from 'antd';

export const RightSideCol = styled(Col)`
  position: sticky;
  top: 0;
  display: flex;
  flex-direction: column;
  height: calc(
    100vh - ${(props) => props.theme.desktopLayout.headerHeight} -
      ${(props) => props.theme.desktopLayout.paddingVertical} * 2
  );
  padding-left: 1.875rem;

  &:before {
    height: 100vh;
    display: block;
    width: 1px;
    background: ${(props) => props.theme.colors.border.main};
    content: '';
    position: absolute;
    margin-top: -${(props) => props.theme.desktopLayout.paddingVertical};
    left: 0;
  }

  #patient-timeline {
    overflow-y: auto;
  }
`;

export const LeftSideCol = styled(Col)`
  padding-right: 1rem;
`;

export const Space = styled.div`
  margin: 1rem 0;
`;
