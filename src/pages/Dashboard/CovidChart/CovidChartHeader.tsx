import React from 'react';
import styled from 'styled-components';
import { Col, Row, Typography } from 'antd';
import { MonthSelect } from '../../../components/common/MonthSelect';

export const CovidChartHeader: React.FC = () => {
  return (
    <Row align="middle" justify="space-between">
      <Col>
        <TextStyled>COVID-19</TextStyled>
      </Col>
      <Col>
        <MonthSelect />
      </Col>
    </Row>
  );
};

const TextStyled = styled(Typography.Text)`
  color: ${(props) => props.theme.colors.primary};
`;
