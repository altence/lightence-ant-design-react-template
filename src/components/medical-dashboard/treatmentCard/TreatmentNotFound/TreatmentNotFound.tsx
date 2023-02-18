import React from 'react';
import { BaseCard } from '../../../common/BaseCard/BaseCard';
import notFoundImg from 'assets/images/nothing-found.webp';
import { useTranslation } from 'react-i18next';
import * as S from './TreatmentNotFound.styles';

export const TreatmentNotFound: React.FC = () => {
  const { t } = useTranslation();

  return (
    <BaseCard padding="1rem">
      <S.CardBody>
        <S.Image src={notFoundImg} alt="Not found" preview={false} />
        <S.Text>{t('medical-dashboard.treatmentPlan.noVisits')}</S.Text>
      </S.CardBody>
    </BaseCard>
  );
};
