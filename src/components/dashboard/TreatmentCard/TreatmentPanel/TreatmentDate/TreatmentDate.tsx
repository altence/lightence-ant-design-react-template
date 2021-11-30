import React from 'react';
import { Col, Row } from 'antd';
import { Card } from 'components/common/Card/Card';
import { AppDate } from 'constants/Dates';
import * as S from './TreatmentDate.styles';

interface TreatmentDateProps {
  date: AppDate;
}

export const TreatmentDate: React.FC<TreatmentDateProps> = ({ date }) => {
  return (
    <Card>
      <S.NotificationWrapper>
        <S.NotificationDot dot>
          <S.Bell />
        </S.NotificationDot>
      </S.NotificationWrapper>
      <Row gutter={[20, 20]}>
        <Col span={24}>
          <Row>
            <Col span={24}>
              <S.Title>{date.format('D')}</S.Title>
            </Col>

            <Col span={24}>
              <S.Subtitle>{date.format('MMMM')}</S.Subtitle>
            </Col>
          </Row>
        </Col>

        <Col span={24}>
          <S.Text>{date.format('HH:mm')}</S.Text>
        </Col>
      </Row>
    </Card>
  );
};
