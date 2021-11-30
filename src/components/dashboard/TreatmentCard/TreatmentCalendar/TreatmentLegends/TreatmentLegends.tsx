import React from 'react';
import { Col, Row } from 'antd';
import { useTranslation } from 'react-i18next';
import { TreatmentLegend } from './TreatmentLegend/TreatmentLegend';

export const TreatmentLegends: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Row gutter={[5, 5]} justify="space-between">
      <Col span={12}>
        <TreatmentLegend isPrimary text={t('dashboard.treatmentPlan.upcomingTreatment')} />
      </Col>

      <Col span={12}>
        <TreatmentLegend text={t('dashboard.treatmentPlan.implementationTreatment')} />
      </Col>
    </Row>
  );
};
