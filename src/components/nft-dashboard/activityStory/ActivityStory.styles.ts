import { Row, Typography } from 'antd';
import styled from 'styled-components';

export const Title = styled(Typography.Text)`
  font-weight: ${(props) => props.theme.commonFontWeight.semibold};
`;

export const ActivityRow = styled(Row)`
  overflow-y: auto;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  height: 100%;
`;
