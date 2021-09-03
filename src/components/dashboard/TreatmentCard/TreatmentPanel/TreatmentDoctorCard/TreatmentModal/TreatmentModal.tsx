import React from 'react';
import { Button, Input, notification } from 'antd';
import { useTranslation } from 'react-i18next';
import * as S from './TreatmentModal.styles';

interface TreatmentModal {
  setModalVisible: (state: boolean) => void;
  isModalVisible: boolean;
}

export const TreatmentModal: React.FC<TreatmentModal> = ({ setModalVisible, isModalVisible }) => {
  const { t } = useTranslation();

  const handleOk = () => {
    setModalVisible(false);

    notification.open({
      message: t('common.success'),
      description: t('dashboard.treatmentPlan.successQuestion'),
    });
  };

  const handleCancel = () => {
    setModalVisible(false);
  };

  return (
    <S.Modal
      visible={isModalVisible}
      onOk={handleOk}
      onCancel={handleCancel}
      footer={[
        <Button key="back" onClick={handleCancel}>
          {t('common.cancel')}
        </Button>,
        <Button key="submit" type="primary" onClick={handleOk}>
          {t('common.ok')}
        </Button>,
      ]}
    >
      <Input placeholder={t('dashboard.treatmentPlan.question')} />
    </S.Modal>
  );
};
