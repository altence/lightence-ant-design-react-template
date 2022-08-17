import React from 'react';
import { BarChartOutlined, CheckOutlined, FileTextOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import { Steps, Step } from '@app/components/common/Steps/Steps';
import { Dates } from '@app/constants/Dates';
import { patientResultsData } from '@app/constants/patientResultsData';
import { patientResultStatus } from '@app/constants/patientResultStatus';
import { DashboardCard } from '@app/components/medical-dashboard/DashboardCard/DashboardCard';
import * as S from './PatientResultsCard.styles';

const icons = [<CheckOutlined key={0} />, <BarChartOutlined key={1} />, <FileTextOutlined key={2} />];

export const PatientResultsCard: React.FC = () => {
  const { t } = useTranslation();

  return (
    <DashboardCard>
      <Steps direction="vertical" current={0}>
        {patientResultStatus.map((status, index) => {
          const patientResult = patientResultsData.find((item) => item.status === status.id) || {
            isActive: false,
            date: Date.now(),
          };
          return (
            <Step
              title={<S.TitleWrapper>{t(status.name)}</S.TitleWrapper>}
              description={
                <S.InfoWrapper>
                  <S.DateWrapper>
                    <S.CalendarIcon />
                    <S.Text>{Dates.format(patientResult?.date, 'D MMMM YYYY')}</S.Text>
                  </S.DateWrapper>
                  <S.Description>{t(status.desc)}</S.Description>
                </S.InfoWrapper>
              }
              key={status.id}
              icon={<S.IconWrapper isActive={patientResult.isActive}>{icons[index]}</S.IconWrapper>}
            />
          );
        })}
      </Steps>
    </DashboardCard>
  );
};
