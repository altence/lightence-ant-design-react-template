import styled from 'styled-components';
import { default as AntIcon } from '@ant-design/icons';
import theme from 'styles/theme';
import { Title, Text } from './StatisticsInfo/StatisticsInfo.styles';
import { ValueText, UnitText } from './StatisticsProgress/StatisticsProgress.styles';
import { StatisticColor } from 'constants/config/statistics';
import { DashboardCard } from '../DashboardCard/DashboardCard';
import { Row } from 'antd';

interface StatisticsProps {
  color: StatisticColor;
}

export const StatisticsRow = styled(Row)`
  max-width: 8rem;
`;

export const Icon = styled(AntIcon)`
  font-size: 1rem;

  @media only screen and ${theme.media.md} {
    font-size: 0.8rem;
  }

  @media only screen and ${theme.media.xl} {
    font-size: 1.5rem;
  }

  @media only screen and ${theme.media.xxl} {
    font-size: 2rem;
  }
`;

export const StatisticCard = styled(DashboardCard)<StatisticsProps>`
  border: 1px solid ${(props) => props.color};

  & .ant-card-body {
    display: flex;
    justify-content: center;
  }

  & ${Icon}, ${Title}, ${Text}, ${ValueText}, ${UnitText} {
    color: ${(props) => props.color};
  }
`;
