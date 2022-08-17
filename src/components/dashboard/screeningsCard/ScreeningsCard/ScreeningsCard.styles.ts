import { media } from '@app/styles/themes/constants';
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
