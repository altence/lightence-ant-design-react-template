import styled from 'styled-components';
import { DashboardCard } from '../DashboardCard/DashboardCard';

export const ScreeningsCard = styled(DashboardCard)`
  @media only screen and ${(props) => props.theme.media.xl} {
    .ant-card-body {
      position: relative;
      overflow: hidden;
    }
  }
`;
