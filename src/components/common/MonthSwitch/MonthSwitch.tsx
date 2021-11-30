import React from 'react';
import { Col, Row } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { Card } from 'components/common/Card/Card';
import * as S from './MonthSwitch.styles';
import { AppDate, Dates } from 'constants/Dates';

interface MonthSwitchProps {
  date: AppDate;
  onIncrease: () => void;
  onDecrease: () => void;
}

export const MonthSwitch: React.FC<MonthSwitchProps> = ({ date, onIncrease, onDecrease }) => {
  return (
    <Card padding={[12, 8]}>
      <Row justify="center" gutter={[12, 12]}>
        <Col>
          <LeftOutlined onClick={onDecrease} />
        </Col>

        <Col>
          <S.Text>{Dates.format(date, 'MMMM YYYY')}</S.Text>
        </Col>

        <Col>
          <RightOutlined onClick={onIncrease} />
        </Col>
      </Row>
    </Card>
  );
};
