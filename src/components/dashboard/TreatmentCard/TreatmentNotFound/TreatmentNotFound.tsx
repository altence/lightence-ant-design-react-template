import React from 'react';
import { Card } from '../../../common/Card/Card';
import notFoundImg from 'assets/images/nothing-found.png';
import { useTranslation } from 'react-i18next';
import * as S from './TreatmentNotFound.styles';

export const TreatmentNotFound: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Card padding="1rem">
      <S.CardBody>
        <S.Image src={notFoundImg} alt="Not found" preview={false} />
        <S.Text>{t('dashboard.treatmentPlan.noVisits')}</S.Text>
      </S.CardBody>
    </Card>
  );
};
