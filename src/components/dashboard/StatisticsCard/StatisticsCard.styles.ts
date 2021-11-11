import styled from 'styled-components';
import { default as AntIcon } from '@ant-design/icons';
import theme from 'styles/theme';
import { Title, Text } from './StatisticsInfo/StatisticsInfo.styles';
import { ValueText, UnitText } from './StatisticsProgress/StatisticsProgress.styles';
import { StatisticColor } from 'constants/config/statistics';
import { DashboardCard } from '../DashboardCard/DashboardCard';

interface StatisticsProps {
  color: StatisticColor;
}

export const Icon = styled(AntIcon)`
  font-size: 0.8rem;

  @media only screen and ${theme.media.md} {
    font-size: 1.5rem;
  }

  @media only screen and ${theme.media.xxl} {
    font-size: 2rem;
  }
`;

export const StatisticCard = styled(DashboardCard)<StatisticsProps>`
  line-height: 1;

  border: 1px solid ${(props) => props.color};

  & ${Icon}, ${Title}, ${Text}, ${ValueText}, ${UnitText} {
    color: ${(props) => props.color};
  }
`;
