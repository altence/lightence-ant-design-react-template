import React from 'react';
import { Col, Row } from 'antd';
import { MonthSwitch } from 'components/common/MonthSwitch/MonthSwitch';
import { TreatmentProps } from '../../interfaces';
import * as S from './TreatmentCalendarHeader.styles';
import { useTranslation } from 'react-i18next';

type TreatmentCalendarHeaderProps = Omit<TreatmentProps, 'setDate'>;

export const TreatmentCalendarHeader: React.FC<TreatmentCalendarHeaderProps> = ({
  date,
  handleIncrease,
  handleDecrease,
}) => {
  const { t } = useTranslation();

  return (
    <Row gutter={[10, 10]} wrap={false} justify="space-between" align="middle">
      <Col>
        <S.Title>{t('common.calendar')}</S.Title>
      </Col>

      <Col>
        <MonthSwitch date={date} onIncrease={handleIncrease} onDecrease={handleDecrease} />
      </Col>
    </Row>
  );
};
