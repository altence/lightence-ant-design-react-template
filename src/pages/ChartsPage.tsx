import { Col } from 'antd';
import { GradientStackedAreaChart } from 'components/charts/GradientStackedAreaChart/GradientStackedAreaChart';
import { PieChart } from 'components/charts/PieChart/PieChart';
import { BarAnimationDelayChart } from 'components/charts/BarAnimationDelayChart/BarAnimationDelayChart';
import { ScatterChart } from 'components/charts/ScatterChart/ScatterChart';
import { LineRaceChart } from 'components/charts/LineRaceChart/LineRaceChart';
import * as S from './ChartsPage.styles';

const ChartsPage: React.FC = () => {
  return (
    <S.Row gutter={[30, 30]}>
      <Col xs={24} md={15}>
        <GradientStackedAreaChart />
      </Col>
      <Col xs={24} md={9}>
        <PieChart />
      </Col>
      <Col xs={24} md={24}>
        <LineRaceChart />
      </Col>
      <Col xs={24} md={9}>
        <ScatterChart />
      </Col>
      <Col xs={24} md={15}>
        <BarAnimationDelayChart />
      </Col>
    </S.Row>
  );
};

export default ChartsPage;
