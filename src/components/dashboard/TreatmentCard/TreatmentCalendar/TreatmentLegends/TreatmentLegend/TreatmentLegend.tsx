import React from 'react';
import { Col, Row } from 'antd';
import { LegendProps } from './intefaces';
import * as S from './TreatmentLegend.styles';

interface TreatmentLegendProps extends LegendProps {
  text: string;
}

export const TreatmentLegend: React.FC<TreatmentLegendProps> = ({ isPrimary, text }) => {
  return (
    <Row wrap={false} gutter={[5, 5]} align="top">
      <Col>
        <S.Text>
          <S.LegendIcon isPrimary={isPrimary} />
        </S.Text>
      </Col>

      <Col>
        <S.Text>-</S.Text>
      </Col>

      <Col>
        <S.Text>{text}</S.Text>
      </Col>
    </Row>
  );
};
