import { media } from '@app/styles/themes/light/lightTheme';
import styled from 'styled-components';
import { DashboardCard } from '../../DashboardCard/DashboardCard';

export const ScreeningsCard = styled(DashboardCard)`
  @media only screen and ${media.xl} {
    .ant-card-body {
      position: relative;
      overflow: hidden;
    }
  }
`;
