import { Row, Typography } from 'antd';
import styled from 'styled-components';

export const Title = styled(Typography.Text)`
  font-weight: ${(props) => props.theme.commonFontWeight.semibold};

  font-size: ${(props) => props.theme.commonFontSizes.xs};
`;

export const ActivityRow = styled(Row)`
  overflow-y: auto;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  height: 100%;
`;
