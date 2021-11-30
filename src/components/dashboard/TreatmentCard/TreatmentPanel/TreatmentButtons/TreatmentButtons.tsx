import React, { useState } from 'react';
import { Col, notification, Row } from 'antd';
import { useTranslation } from 'react-i18next';
import { Button } from 'components/common/buttons/Button/Button';
import { Modal } from 'components/common/Modal/Modal';
import { AskDoctor } from './AskDoctor/AskDoctor';
import { AppDate, Dates } from 'constants/Dates';

interface TreatmentButtonsProps {
  date: AppDate;
  isEvent: boolean;
}

export const TreatmentButtons: React.FC<TreatmentButtonsProps> = ({ date, isEvent }) => {
  const [isModalVisible, setModalVisible] = useState(false);

  const { t } = useTranslation();

  const today = Dates.getToday();

  const handleClickBtn = () => {
    notification.open({
      message: t('common.success'),
      description: t('dashboard.treatmentPlan.successTreatment'),
    });
  };

  return (
    <>
      <Row gutter={[10, 10]}>
        <Col xs={12} md={24}>
          <Button block type="ghost" disabled={!isEvent} onClick={() => setModalVisible(true)}>
            {t('dashboard.treatmentPlan.askDoctor')}
          </Button>
        </Col>

        <Col xs={12} md={24}>
          <Button type="primary" disabled={date.isBefore(today) || !isEvent} block onClick={handleClickBtn}>
            {t('common.confirm')}
          </Button>
        </Col>
      </Row>

      <Modal footer={null} closable={false} visible={isModalVisible} onCancel={() => setModalVisible(false)}>
        <AskDoctor />
      </Modal>
    </>
  );
};
