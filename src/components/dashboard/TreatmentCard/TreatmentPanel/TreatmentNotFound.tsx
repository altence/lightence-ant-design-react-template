import React from 'react';
import { Card } from '../../../common/Card/Card';
import { Image } from 'antd';
import notFoundImg from 'assets/images/nothing-found.png';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

const Text = styled.div`
  color: ${(props) => props.theme.colors.main.primary};
  text-align: center;
  font-size: 1.25rem;
`;

export const TreatmentNotFound: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Card padding="1rem">
      <Image src={notFoundImg} alt="Not found" preview={false} />
      <Text>{t('dashboard.treatmentPlan.noVisits')}</Text>
    </Card>
  );
};
